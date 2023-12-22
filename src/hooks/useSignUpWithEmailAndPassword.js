import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, getDocs, setDoc } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();

    const loginUser = useAuthStore(state => state.login);

    const signup = async ({ email, password, username, fullName }) => {

        if (!email || !password || !username || !fullName) {
            showToast("Error", "Please fill all the fields", "error");
            return;
        }

        const usersRef = collection(firestore, "users");

        const q = query(usersRef, where("username", "==", username));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            showToast("Error", "Username already exists", "error");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(email, password);

            if (!newUser && error) {
                showToast("Error", error.message, "error")
                return;
            }

            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: email,
                    username: username,
                    fullName: fullName,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now()
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);

                localStorage.setItem("user-info", JSON.stringify(userDoc));

                loginUser(userDoc);
            }
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

    return { loading, error, signup };

}

export default useSignUpWithEmailAndPassword;