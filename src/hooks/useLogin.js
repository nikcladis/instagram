import { doc, getDoc } from "firebase/firestore";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firestore } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast"
import { auth } from "../firebase/firebase";

const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const loginUser = useAuthStore((state) => state.login);

    const login = async ({ email, password }) => {
        if (!email || !password) {
            return showToast("Error", "Please fill all the fields", "error");
        }
        try {
            const userCredential = await signInWithEmailAndPassword(email, password);

            if (userCredential) {
                const docRef = doc(firestore, "users", userCredential.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
                loginUser(docSnap.data());
            }

        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }

    return { login, loading, error };
}

export default useLogin
