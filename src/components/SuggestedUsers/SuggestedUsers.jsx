import { Flex, VStack, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={"sm"} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={"sm"}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See all
        </Text>
      </Flex>

      <SuggestedUser
        name="Dan Abrahmov"
        followers={1392}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={562}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Mwamba"
        followers={789}
        avatar="https://bit.ly/code-beast"
      />

      <Box alignSelf={"flex-start"} fontSize={12} color={"gray.500"} mt={5}>
        © 2023 Built by{" "}
        <Link
          href="https://github.com/nikcladis"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          nikcladis
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
