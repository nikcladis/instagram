import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

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

const boxLeftStyles = {
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
        <Box {...boxLeftStyles}>
          <Image src="/auth.png" h={650} alt="Phone img" />
        </Box>
      </Container>
      <VStack {...vStackStyles}>
        <AuthForm />
      </VStack>
    </Flex>
  );
};

export default AuthPage;
