import { Avatar, Text, Link, Flex, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/profilepic.png" alt="profile pic" />
        <Text fontWeight={"bold"} fontSize={"sm"}>
          nikcladis
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={"sm"}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </HStack>
  );
};

export default SuggestedHeader;
