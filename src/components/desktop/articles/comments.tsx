import { useState } from "react";
import { Box, createStyles, Input } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: theme.spacing.xl,
  },
  comments: {
    width: "100%",
    maxWidth: 600,
    marginTop: theme.spacing.xl,
  },
  comment: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    padding: theme.spacing.md,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.md,
  },
  input: {
    width: "100%",
    maxWidth: 600,
    marginTop: theme.spacing.xl,
  },
}));

export default function RedditStyleCommentsSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      comment: "asdlkjaskldjas",
      avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
      date: "2 hours ago",
      replies: [
        {
          id: 53,
          author: "aas asdasd",
          avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
          date: "2 hours ago",
        },
        {
          id: 4,
          author: "aas asdasd",
          avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
          date: "2 hours ago",
        },
        {
          id: 53,
          author: "aas asdasd",
          avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
          date: "2 hours ago",
        },
      ],
    },
    {
      id: 2,
      author: "John Doe",
      comment: "asdlkjaskldjas",
      avatar: "https://avatars0.githubusercontent.com/u/9947422?s=460&v=4",
      date: "2 hours ago",
      replies: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");
  const [replyId, setReplyId] = useState("");

  const fetchComments = async () => {
    try {
      const res = await fetch("/api/articles/comments");
      const data = await res.json();
      setComments(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/articles/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const data = await res.json();
    setComments([...comments, data]);
    setComment("");
  };

  const handleReply = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/articles/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: reply, replyId }),
    });
    const data = await res.json();
    const newComments = comments.map((comment) => {
      if (comment.id === data.replyId) {
        comment.replies.push(data);
      }
      return comment;
    });
    setComments(newComments);
    setReply("");
    setReplyId("");
  };

  const handleReplyClick = (id) => {
    setReplyId(id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/articles/comments/${id}`, {
      method: "DELETE",
    });
    const newComments = comments.filter((comment) => comment.id !== id);
    setComments(newComments);
  };

  const handleDeleteReply = async (id, replyId) => {
    await fetch(`/api/articles/comments/${replyId}`, {
      method: "DELETE",
    });
    const newComments = comments.map((comment) => {
      if (comment.id === id) {
        comment.replies = comment.replies.filter(
          (reply) => reply.id !== replyId
        );
      }
      return comment;
    });
    setComments(newComments);
  };

  const { classes } = useStyles();
  return (
    <Box className={classes.comments}>
      <h1>Comments</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {!loading && !error && (
        <>
          <form onSubmit={handleComment}>
            <Input
              className={classes.input}
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Comment</button>
          </form>
        </>
      )}
      {comments.map((comment) => (
        <Box key={comment.id} className={classes.comment}>
          <p>{comment.comment}</p>
          <button onClick={() => handleReplyClick(comment.id)}>Reply</button>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>

          <form onSubmit={handleReply}>
            <Input
              className={classes.input}
              type="text"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <button type="submit">Reply</button>
          </form>
        </Box>
      ))}
    </Box>
  );
}
