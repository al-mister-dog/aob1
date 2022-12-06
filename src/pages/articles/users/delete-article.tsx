import { prisma } from "../../../lib/prisma";
import { Box, Button, Group, LoadingOverlay, Text } from "@mantine/core";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export default function NewArticle({ article }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function deleteArticle() {
    setLoading(true);
    const { status } = await axios.delete("/api/articles", {
      data: { id: article.id },
    });
    if (status === 201) {
      router.replace("/community/users");
    } else {
      setLoading(false);
      toast.error(
        "Something went wrong with deleting your article. Please try again later",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  return (
    <>
      <Box
        mt={100}
        style={{
          height: "100vh",
        }}
      >
        <Box style={{ margin: "auto", width: "350px" }}>
          <h3>Delete "{article.title}"</h3>
          <Text>Are you sure you want to delete this article?!</Text>
          <Group mt={10}>
            <Button
              variant="outline"
              color="violet"
              onClick={() => router.replace(`/community/users`)}
            >
              Cancel
            </Button>
            <Button variant="filled" color="red" onClick={deleteArticle}>
              Delete
            </Button>
          </Group>
        </Box>
      </Box>
      <LoadingOverlay
        visible={loading}
        loaderProps={{ color: "violet", size: "xl" }}
      />
      <ToastContainer />
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/registration/signin",
      },
    };
  }

  const data = await prisma.post.findUnique({
    where: { id: context.query.articleId },
    include: {
      user: true,
    },
  });

  const article = {
    id: data.id,
    title: data.title,
    preview: data.preview,
    body: data.body,
    path: data.path,
    userId: data.userId,
  };

  const user = data.user;

  return {
    props: { article, user },
  };
}
