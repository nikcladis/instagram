import {
  Avatar,
  Box,
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
import Comment from "../Comment/Comment";

const PostModal = ({ isOpen, onClose, img }) => {
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
          <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
            <Box
              borderRadius={4}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"whiteAlpha.300"}
              flex={1.5}
            >
              <Image src={img} alt="profile post" />
            </Box>
            <Flex
              flex={1}
              flexDir={"column"}
              px={10}
              display={{ base: "none", md: "flex" }}
            >
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={4}>
                  <Avatar
                    src="/profilepic.png"
                    size={"sm"}
                    name={"nikcladis"}
                  />
                  <Text fontWeight={"bold"} fontSize={12}>
                    nikcladis
                  </Text>
                </Flex>

                <Box
                  _hover={{ base: "whiteAlpha.300", color: "red.600" }}
                  borderRadius={4}
                  p={1}
                >
                  <MdDelete size={20} cursor={"pointer"}></MdDelete>
                </Box>
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
                <Comment
                  createdAt={"1d ago"}
                  username={"kentdodds"}
                  profilePic={"/profilepic.png"}
                  text={"Dummy images from unsplash"}
                />
              </VStack>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PostModal;
