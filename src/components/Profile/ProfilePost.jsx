import { Flex, GridItem, Image, Text, useDisclosure } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import PostModal from "../PostModal/PostModal";
import useUserProfileStore from "../../store/useUserProfileStore";
import useAuthStore from "../../store/authStore";

const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);

  console.log("authUserUId: ", authUser);
  console.log("userProfileUId: ", userProfile);

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          inset={0}
          bg={"blackAlpha.700"}
          transition={"opacity 300ms ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex alignItems={"center"}>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={1}>
                {post.likes.length}
              </Text>
            </Flex>
            <Flex alignItems={"center"}>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={1}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={post.imageURL}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <PostModal
        img={post.imageURL}
        isOpen={isOpen}
        onClose={onClose}
        username={userProfile.username}
        fullName={userProfile.fullName}
        profilePic={userProfile.profilePicURL}
        userProfileUId={userProfile.uid}
        authUserUId={authUser?.uid}
      ></PostModal>
    </>
  );
};

export default ProfilePost;
