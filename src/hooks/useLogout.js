import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";

const useLogout = () => {

    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore(state => state.logout);

    const handleLogout = async () => {

        try {
            await signOut();
            localStorage.removeItem("user-info");
            logoutUser();
        } catch (error) {
            showToast("Error", error.message, "error")
        }

    }

    return { handleLogout, loading, error }
}

export default useLogout