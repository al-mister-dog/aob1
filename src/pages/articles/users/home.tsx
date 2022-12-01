import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import { Box, Tabs, Divider } from "@mantine/core";
import ArticleToolbar from "../../../components/desktop/articles/users/article-toolbar";
import Loader from "../../../components/shared-ui/loader";
import { colors } from "../../../config/colorPalette";

interface Article {
  id: string;
  title: string;
  preview: string;
  createdAt: string;
  user: {};
}

export default function Index() {
  return (
    <>
      <Box style={{ margin: "auto", marginTop: 100, maxWidth: 850 }}>
        <HeaderTabs />
      </Box>
    </>
  );
}

function HeaderTabs() {
  const { data, error } = useSWR(`/api/articles/`, fetcher);
  return (
    <Tabs color="violet" defaultValue="first">
      <Tabs.List position="left">
        <Tabs.Tab value="first">Featured</Tabs.Tab>
        <Tabs.Tab value="second">For You</Tabs.Tab>
        <Tabs.Tab value="third">Explore</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        <Box mt={25}>
          {!data && <Loader />}
          {error && <>Articles not found</>}
          {data &&
            data.map((article) => {
              return (
                <Box mt={10} key={article.id}>
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
                    <Box mt={10} style={{ cursor: "pointer" }}>
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
                        style={{
                          color: colors.textColor,
                          margin: 0,
                          padding: 0,
                        }}
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
