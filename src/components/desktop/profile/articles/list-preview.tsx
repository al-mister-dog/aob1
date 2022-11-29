import { Box, Text, Button, Divider } from "@mantine/core";
import Link from "next/link";
import useSWR from "swr";
import { colors } from "../../../../config/colorPalette";
import { fetcher } from "../../../../lib/fetcher";

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
        <Link href="/articles/users/new-article">
          <Button variant="outline" color="violet">
            Write New Article
          </Button>
        </Link>
      </Box>
      <ArticlesList email={user.email} />
    </Box>
  );
}

function ArticlesList({ email }) {
  const { data, error } = useSWR(`/api/article/?email=${email}`, fetcher);

  if (!data) {
    return <>there are currently no articles here</>;
  }
  if (error) {
    return <>there was an error retrieving articles</>;
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
