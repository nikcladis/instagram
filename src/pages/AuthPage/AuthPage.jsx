import React from "react";
import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";

const flexStyles = {
  minH: "100vh",
  justifyContent: "center",
  alignItems: "center",
  px: 4,
};

const containerStyles = {
  maxW: "md",
  padding: 0,
};

const boxStyles = {
  display: {
    base: "none",
    md: "block",
  },
};

const vStackStyles = {
  spacing: 4,
  align: "stretch",
};

const AuthPage = () => {
  return (
    <Flex {...flexStyles}>
      <Container {...containerStyles}>
        <Box {...boxStyles}>
          <Image src="/auth.png" h={650} alt="Phone img" />
        </Box>
      </Container>
    </Flex>
  );
};

export default AuthPage;
