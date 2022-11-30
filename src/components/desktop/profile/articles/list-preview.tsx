import { Box, Text, Button, Divider, Skeleton } from "@mantine/core";
import { useSession } from "next-auth/react";
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
        {/* <Link href="/articles/users/new-article">
          <Button variant="outline" color="violet">
            Write New Article
          </Button>
        </Link> */}
        <WriteNewArticleButton user={user} />
      </Box>
      <ArticlesList email={user.email} />
    </Box>
  );
}

function WriteNewArticleButton({ user }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div style={{ height: 50 }}></div>;
  } else if (!session) {
    return <div style={{ height: 50 }}></div>;
  } else if (session && session.user.email === user.email) {
    return (
      <Link href="/articles/users/new-article">
        <Button variant="outline" color="violet">
          Write New Article
        </Button>
      </Link>
    );
  }
}

function ArticlesList({ email }) {
  const { data, error } = useSWR(`/api/user-article/?email=${email}`, fetcher);

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
