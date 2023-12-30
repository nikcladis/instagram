import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import useUserProfileStore from "../../store/useUserProfileStore";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const PostModal = ({
  isOpen,
  onClose,
  img,
  username,
  fullName,
  profilePic,
  userProfileUId,
  authUserUId,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: "3xl", md: "5xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody bg={"black"} pb={5}>
          <Flex
            gap={4}
            w={{ base: "90%", sm: "70%", md: "full" }}
            mx={"auto"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ md: "center" }}
            alignItems={{ md: "center" }}
          >
            <Box
              borderRadius={4}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"whiteAlpha.300"}
              height={"fit-content"}
              flex={1.5}
            >
              <Image src={img} alt="profile post" backgroundSize={"cover"} />
            </Box>
            <Flex flex={1} flexDir={"column"} px={{ base: 0, md: 10 }}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={4}>
                  <Avatar src={profilePic} size={"sm"} name={fullName} />
                  <Text fontWeight={"bold"} fontSize={12}>
                    {username}
                  </Text>
                </Flex>

                {authUserUId === userProfileUId && (
                  <Button
                    size={"sm"}
                    bg={"transparent"}
                    _hover={{ base: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete size={20} cursor={"pointer"}></MdDelete>
                  </Button>
                )}
              </Flex>
              <Divider my={4} bg={"gray.500"} />
              <VStack
                w={"full"}
                alignItems={"flex-start"}
                maxH={"350px"}
                overflowY={"auto"}
              >
                <Comment
                  createdAt={"1d ago"}
                  username={"nikcladis"}
                  profilePic="/profilepic.png"
                  text={"Dummy images from unsplash"}
                />
                <Comment
                  createdAt={"12h ago"}
                  username={"abrahmov"}
                  profilePic={"/profilepic.png"}
                  text={"Dummy images from unsplash"}
                />
              </VStack>
              <Divider my={4} bg={"gray.800"} />
              <Box marginTop={"auto"}>
                <PostFooter isProfilePage={true} />
              </Box>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
