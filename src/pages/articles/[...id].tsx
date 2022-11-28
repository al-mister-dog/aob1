import { PrismaClient } from "@prisma/client";
import parse from "html-react-parser";
import { Box, Group, Text } from "@mantine/core";
import { colors } from "../../config/colorPalette";
import { parseDate } from "../../helpers/parseDate";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    title: null | string;
    bio: null | string;
    emailVerified: null | boolean;
    image: string;
  };
}

export default function UserArticle({ article }: { article: Article }) {
  return (
    <Box p={50} pr={200}>
      <h1 style={{ margin: 0, padding: 0, color: colors.text }}>
        {article.title}
      </h1>
      <Group>
        <Link href={`/community/users/${article.user.id}`}>
          <Text
            style={{
              margin: 0,
              padding: 0,
              color: colors.text,
              fontSize: 20,
            }}
          >
            {article.user.name}: {article.createdAt}
          </Text>
        </Link>
        <Link href={`/articles/users/${article.user.id}`}>
          <Text
            style={{
              color: colors.text,
            }}
          >
            More Articles by {article.user.name}
          </Text>
        </Link>
      </Group>

      {parse(article.body)}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const id = context.query.id[1];

  const data = await prisma.post.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  const article = {
    id: data.id,
    title: data.title,
    body: data.body,
    createdAt: parseDate(`${data.createdAt}`),
    user: data.user,
  };

  return { props: { article } };
}
