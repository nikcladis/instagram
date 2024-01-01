import { useState, useRef } from "react";
import {
  Box,
  Text,
  Input,
  Stack,
  HStack,
  InputGroup,
  InputRightElement,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  NotificationsLogo,
  UnlikeLogo,
  CommentLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore();
  const commentRef = useRef(null);
  const { isLiked, likes, handleLikePost } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    setComment(comment.trim());

    if (comment) {
      await handlePostComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <Stack as={"footer"} gap={1} my={4} fontSize={"sm"}>
      <HStack gap={4} my={1}>
        <Box cursor={"pointer"} onClick={handleLikePost}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </HStack>
      <Text>{likes} likes</Text>
      {isProfilePage && (
        <Text fontSize="12" color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {!isProfilePage && (
        <>
          <HStack gap={1}>
            <Text fontWeight={"bold"}>{creatorProfile?.username} </Text>
            <Text as="span">{post.caption}</Text>
          </HStack>
          {post.comments.length > 0 && (
            <Text
              fontSize="sm"
              color={"gray"}
              cursor={"pointer"}
              onClick={onOpen}
            >
              View all {post.comments.length} comments
            </Text>
          )}
          {/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
          {isOpen ? (
            <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
          ) : null}
        </>
      )}

      {authUser && (
        <InputGroup>
          <Input
            variant="flushed"
            placeholder="Add a comment..."
            fontSize={14}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            ref={commentRef}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              onClick={handleSubmitComment}
              isLoading={isCommenting}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      )}
    </Stack>
  );
};

export default PostFooter;
