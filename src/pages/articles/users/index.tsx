import { PrismaClient } from "@prisma/client";
import { Box, Divider, Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

export default function UserArticles({ articles }) {
  return (
    <Box
      style={{
        cursor: "pointer",
      }}
    >
      <h2>Articles</h2>

      {articles.map((article) => {
        return (
          <Box key={article.id}>
            <Box>
              <Text color="dimmed" mb={10}>
                {article.createdAt}
              </Text>
              <h3
                style={{ margin: 0, marginBottom: 10, color: colors.textColor }}
              >
                {article.title}
              </h3>
              <p style={{ color: colors.textColor }}>{article.preview}</p>
            </Box>
            <Divider mt={50} />
          </Box>
        );
      })}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const userId = "clb0xjfu60000pfu2u4e4ku11";
  // const data = await prisma.post.findMany({
  //   where: { id: context.query.id },
  //   include: {
  //     user: true,
  //   },
  // });

  // const article = data.map((d) => {
  //   return {
  //     id: d.id,
  //     title: d.title,
  //     user: {
  //       name: d.user.name,
  //     },
  //   };
  // });

  const placeholderArticles = [
    { id: 1, title: "title", preview: "preview", user: { name: "alex" } },
  ];
  return { props: { placeholderArticles } };
}
