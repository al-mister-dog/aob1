import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";
import { parseDate } from "../../helpers/parseDate";
import { Box, Text } from "@mantine/core";
import { colors } from "../../config/colorPalette";


export default function Article({ article }) {
  return (
    <Box p={50} pr={200}>
      <h1 style={{ margin: 0, padding: 0, color: colors.text }}>
        {article.title}
      </h1>
      <Text style={{ margin: 0, padding: 0, color: colors.text, fontSize: 20 }}>
        {article.user.name}: {article.createdAt}
      </Text>
      {parse(article.body)}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const data = await prisma.post.findUnique({
    where: { id: context.query.id },
    include: {
      user: true,
    },
  });

  const article = {
    ...data,
    createdAt: parseDate(`${data.createdAt}`),
    updatedAt: parseDate(`${data.updatedAt}`),
  };

  return { props: { article } };
}
