import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const FeedPost = ({ username, img, avatar }) => {
  return (
    <Box as="article" mb={10}>
      <PostHeader username={username} avatar={avatar} />
      <Box borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={"user profile pic"} />
      </Box>
      <PostFooter />
    </Box>
  );
};

export default FeedPost;
