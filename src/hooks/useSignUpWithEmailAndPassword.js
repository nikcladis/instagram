import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async ({ email, password, username, fullName }) => {

        if (!email || !password || !username || !fullName) {
            console.log("Missing Fields");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(email, password);
            if (!newUser && error) {
                console.log(error);
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
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    }

    return { loading, error, signup };

}

export default useSignUpWithEmailAndPassword;