import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/img1.png" alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          nikcladis
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={"12"}
          fontWeight={"bold"}
          color={"blue.500"}
          _hover={{
            color: "white",
          }}
          transition={"200ms ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
