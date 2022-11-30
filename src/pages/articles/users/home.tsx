import { PrismaClient } from "@prisma/client";
import { parseDate } from "../../../helpers/parseDate";
import {
  Box,
  Text,
  Tabs,
  Grid,
  Group,
  createStyles,
  Autocomplete,
  Divider,
} from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import Link from "next/link";
import { getSession } from "next-auth/react";
import ArticleList from "../../../components/desktop/articles/users/article-list";
import pic from "../../../../public/bosch-bank-2.jpeg";

import { IconSearch } from "@tabler/icons";
import ArticleToolbar from "../../../components/desktop/articles/users/article-toolbar";

const useStyles = createStyles((theme) => ({
  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));

interface Article {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  user: {};
}

export default function Index({ articles, user }) {
  const { classes } = useStyles();
  return (
    <>
      <Box style={{ margin: "auto", marginTop: 100, maxWidth: 850 }}>
        {/* <Group> */}
        <HeaderTabs user={user} articles={articles} />
        {/* <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={[]}
          />
        </Group> */}
      </Box>
    </>
  );
}

function HeaderTabs({ user, articles }) {
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
  const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/registration/signin",
        },
      };
    }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

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

  return { props: { articles, user } };
}
