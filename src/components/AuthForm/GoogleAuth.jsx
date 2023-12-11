import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
        <Image src="/google.png" w={6} alt="Google logo" />
        <Text mx={"2"} color={"blue.500"}>
          Login with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
