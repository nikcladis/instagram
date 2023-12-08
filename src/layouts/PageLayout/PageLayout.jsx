import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
  return (
    <Flex>
      {/* Sidebar on the left*/}
      <Box w={{ base: "70px", md: "240px" }}>
        <Sidebar />
      </Box>
      {/* Content on the right*/}
      <Box>{children}</Box>
    </Flex>
  );
};

export default PageLayout;
