import { Box } from "@mantine/core";
import { getSession } from "next-auth/react";
import ArticleForm from "../../../components/desktop/profile/articles/form-update";
import { colors } from "../../../config/colorPalette";
export default function NewArticle({ article, user }) {
  return (
    <Box style={{ minHeight: "100vh" }}>
      <Box
        style={{
          minWidth: 390,
          maxWidth: "50%",
          margin: "auto",
          marginTop: 50,
        }}
      >
        <ArticleForm user={user} article={article} />
      </Box>
    </Box>
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
