import React from "react";
import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW="md" padding={0}>
        {/* Left hand-side */}
        <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={650} alt="Phone img" />
        </Box>
      </Container>
    </Flex>
  );
};

export default AuthPage;
