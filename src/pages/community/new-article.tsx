import { Box, Text, TextInput } from "@mantine/core";
import { getSession, useSession } from "next-auth/react";

import ArticleForm from "../../components/desktop/profile/articles/form";
import { colors } from "../../config/colorPalette";
export default function NewArticle() {
  const { data: session } = useSession();
  return (
    <Box style={{ minHeight: "100vh" }}>
      <Box style={{ minWidth: 390, maxWidth: "50%", margin: "auto", marginTop: 50 }}>
        <h2 style={{ color: colors.text }}>Create a New Article</h2>
        <ArticleForm email={session.user.email} />
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
  return {
    props: { session },
  };
}
