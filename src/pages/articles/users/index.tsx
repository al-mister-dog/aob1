import { PrismaClient } from "@prisma/client";
import { parseDate } from "../../../helpers/parseDate";
import { Box, Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import Link from "next/link";
import { getSession } from "next-auth/react";

interface Article {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  user: {};
}
export default function UserArticle({ articles }) {
  return (
    <>
      {articles.map((article) => {
        return (
          <Link
            href={{
              pathname: `/articles/${article.id}`,
              query: { id: article.id },
            }}
            as={`/articles/${article.title.split(" ").join("-")}/${article.id}`}
            passHref
          >
            <Box p={50} pr={200}>
              <h1 style={{ margin: 0, padding: 0, color: colors.text }}>
                {article.title}
              </h1>
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
              {article.preview}
            </Box>
          </Link>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const session = await getSession(context);

  //   if (!session) {
  //     return {
  //       redirect: {
  //         destination: "/registration/signin",
  //       },
  //     };
  //   }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  console.log(context.query.id);
  const data = await prisma.post.findMany({
    where: { userId: context.query.id },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const articles = data.map((d) => {
    return {
      id: d.id,
      title: d.title,
      preview: d.preview,
      createdAt: parseDate(`${d.createdAt}`),
      user: d.user,
    };
  });

  return { props: { articles } };
}
