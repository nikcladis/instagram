import { useState } from "react";
import { Button, Box, Flex, Avatar, VStack } from "@chakra-ui/react";

const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack alignItems={"flex-start"} spacing={2}>
          <Box fontSize={"sm"} fontWeight={"bold"}>
            {name}
          </Box>
          <Box alignSelf={"flex-start"} fontSize={11} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Box
        as="button"
        fontSize={13}
        fontWeight={"medium"}
        color={"blue.500"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        transition={"color 200ms ease-in-out"}
        onClick={() => setIsFollowed((prev) => !prev)}
      >
        {!isFollowed ? "Follow" : "Unfollow"}
      </Box>
    </Flex>
  );
};

export default SuggestedUser;
