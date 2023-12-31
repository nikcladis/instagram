import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useGetUserProfileById = (userId) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    const showToast = useShowToast();

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);
            setUserProfile(null);
            try {
                const userRef = await getDoc(doc(firestore, "users", userId));
                if (userRef.exists()) {
                    setUserProfile(userRef.data());
                }

            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        }

        getUserProfile();
    }, [showToast, setUserProfile, userId]);

    return { isLoading, userProfile, setUserProfile };
}

export default useGetUserProfileById;