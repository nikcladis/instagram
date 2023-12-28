import { useState, useEffect } from "react"
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/useUserProfileStore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { doc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";

const useFollowUser = (userId) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const { user, setAuthUser } = useAuthStore();
    const { userProfile, setUserProfile } = useUserProfileStore();
    const showToast = useShowToast();

    const handleFollowUser = async () => {

        try {
            const currectUserRef = doc(firestore, "users", user.uid);
            const userToFollowOrUnfollowRef = doc(firestore, "users", userId);

            await updateDoc(currectUserRef, {
                following: isFollowing ? arrayRemove(userId) : arrayUnion(userId)
            });

            await updateDoc(userToFollowOrUnfollowRef, {
                followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid)
            });

            if (isFollowing) {
                // unfollow
                setAuthUser({
                    ...user,
                    following: user.following.filter(uid => uid !== userId)
                });

                setUserProfile({
                    ...userProfile,
                    followers: userProfile.followers.filter(uid => uid !== user.uid)
                });

                localStorage.setItem("user-info", JSON.stringify({
                    ...user,
                    following: user.following.filter(uid => uid !== userId)
                }));

                setIsFollowing(false);
            } else {
                // follow
                setAuthUser({
                    ...user,
                    following: [...user.following, userId]
                });

                setUserProfile({
                    ...userProfile,
                    followers: [...userProfile.followers, user.uid]
                });

                localStorage.setItem("user-info", JSON.stringify({
                    ...user,
                    following: [...user.following, userId]
                }));

                setIsFollowing(true);
            }

        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsUpdating(false);
        }

        useEffect(() => {
            const isFollowing = authUser.following.includes(userId);
            setIsFollowing(isFollowing);
        }, [authUser, userId]);

        return { isUpdating, isFollowing, handleFollowUser };


    }

    export default useFollowUser