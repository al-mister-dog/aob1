import { PrismaClient } from "@prisma/client";
import { parseDate } from "../../../helpers/parseDate";
import { Box, Tabs, createStyles, Divider } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import Link from "next/link";
import ArticleToolbar from "../../../components/desktop/articles/users/article-toolbar";

interface Article {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  user: {};
}

export default function Index({ articles }: { articles: Article[] }) {
  return (
    <>
      <Box style={{ margin: "auto", marginTop: 100, maxWidth: 850 }}>
        <HeaderTabs articles={articles} />
      </Box>
    </>
  );
}

function HeaderTabs({ articles }) {
  return (
    <Tabs color="violet" defaultValue="first">
      <Tabs.List position="left">
        <Tabs.Tab value="first">Featured</Tabs.Tab>
        <Tabs.Tab value="second">For You</Tabs.Tab>
        <Tabs.Tab value="third">Explore</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        <Box mt={25}>
          {articles.map((article) => {
            return (
              <Box key={article.id}>
                <ArticleToolbar article={article} />
                <Link
                  href={{
                    pathname: `/articles/${article.id}`,
                    query: { id: article.id },
                  }}
                  as={`/articles/${article.title.split(" ").join("-")}/${
                    article.id
                  }`}
                  passHref
                >
                  <Box mt={10}>
                    <h2
                      style={{
                        margin: 0,
                        padding: 0,
                        color: colors.textColor,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{ color: colors.textColor, margin: 0, padding: 0 }}
                    >
                      {article.preview}. . .
                    </p>
                  </Box>
                </Link>

                <Divider mt={50} />
              </Box>
            );
          })}
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        a
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
        a
      </Tabs.Panel>
    </Tabs>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const data = await prisma.post.findMany({
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

// export default function Home() {
//   return <><div style={{marginTop: 150}}>
//     Hello</div></>
// }
