import { useState } from "react";
import {
  Box,
  Text,
  Input,
  Stack,
  HStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";

const PostFooter = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    !isLiked ? setLikes((prev) => prev + 1) : setLikes((prev) => prev - 1);
    setIsLiked((prev) => !prev);
  };

  return (
    <Stack as={"footer"} gap={1} my={4} fontSize={"sm"}>
      <HStack gap={4} my={1}>
        <Box cursor={"pointer"} onClick={handleLike}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"}>
          <CommentLogo />
        </Box>
      </HStack>
      <Text>{likes} likes</Text>
      <HStack gap={1}>
        <Text fontWeight={"bold"}>nikcladis</Text>
        <Text as="span">Feeling good</Text>
      </HStack>
      <Text cursor={"pointer"} color={"gray.500"}>
        View all 1,000 comments
      </Text>
      <InputGroup>
        <Input variant="flushed" placeholder="Add a comment..." fontSize={14} />
        <InputRightElement
          as={"button"}
          cursor={"pointer"}
          fontSize={"sm"}
          fontWeight={"bold"}
          color={"blue.500"}
          _hover={{
            color: "white",
          }}
          transition={"200ms ease-in-out"}
        >
          Post
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default PostFooter;
