import { Box, Text, Button, Divider } from "@mantine/core";
import Link from "next/link";
import useSWR from "swr";
import { colors } from "../../../../config/colorPalette";
import { fetcher } from "../../../../lib/fetcher";
import SessionContainer from "../../../auth/registration/SessionContainer";

export default function Articles({ user }) {
  return (
    <Box mt={25}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <WriteNewArticleButton user={user} />
      </Box>
      <ArticlesList user={user} />
    </Box>
  );
}

function WriteNewArticleButton({ user }) {
  return (
    <SessionContainer user={user}>
      <Link href="/articles/users/new-article">
        <Button variant="outline" color="violet">
          Write New Article
        </Button>
      </Link>
    </SessionContainer>
  );
}

function ArticlesList({ user }) {
  const { data, error } = useSWR(`/api/articles/user/${user.id}`, fetcher);

  if (!data) {
    return <Box style={{ height: "100vh" }}></Box>;
  } else if (error) {
    return <>there was a problem retrieving articles</>;
  } else if (data.length === 0) {
    <>There are Currently No Articles Here.</>;
  }

  return (
    <Box>
      {data.map((article) => {
        return (
          <Box key={article.id}>
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
              <Box>
                <Text color="dimmed" mb={10}>
                  {article.createdAt}
                </Text>
                <h3
                  style={{
                    margin: 0,
                    marginBottom: 10,
                    color: colors.textColor,
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ color: colors.textColor }}>{article.preview}</p>
              </Box>
            </Link>

            <Divider mt={50} />
          </Box>
        );
      })}
    </Box>
  );
}
