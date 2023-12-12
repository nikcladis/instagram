import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        m={"auto"}
      >
        <Avatar name="nikcladis" src="/profilepic.png" alt="nikcladis logo" />
      </AvatarGroup>
      <VStack alignItems={"flex-start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
          gap={4}
          direction={{ base: "column", sm: "row" }}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>nikcladis</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }} mt={{ base: 2 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>{" "}
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              194
            </Text>{" "}
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              168
            </Text>{" "}
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={"bold"}>
            Junior React Developer
          </Text>
        </Flex>
        <Text fontSize={{ base: "xs", md: "sm" }}>
          BSc Information Technology.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;