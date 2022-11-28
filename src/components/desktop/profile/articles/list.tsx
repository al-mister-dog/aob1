import { Box, Text, Button, Divider } from "@mantine/core";
import Link from "next/link";
import { userAgent } from "next/server";
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
        <Link href="community/new-article">
          <Button variant="outline" color="violet">
            Write New Article
          </Button>
        </Link>
      </Box>
      {/* <Box>
        <Text color="dimmed" mb={10}>
          3 Days ago
        </Text>
        <h3 style={{ margin: 0, marginBottom: 10, color: colors.textColor }}>
          Clearing House Loans
        </h3>
        <p style={{ color: colors.textColor }}>
          Clearinghouse loan certificates are like banknotes, but they're being
          issued against member loans rather than the special 2% government
          bonds. Before 1907, it wasn't clear that they were legal. Because a
          loan taken by a debtor bank accrued 6% interest, so did the
          Clearinghouse loan certificates. . .
        </p>
      </Box>
      <Divider mt={50} />
      <Box mt={50}>
        <Text color="dimmed" mb={10}>
          6 Days ago
        </Text>
        <h3 style={{ margin: 0, marginBottom: 10, color: colors.textColor }}>
          Fed Funds Effective Rate
        </h3>
        <p style={{ color: colors.textColor }}>
          If we averaged all the different fed funds loans traded between banks
          we would get the Effective Federal Funds Rate (EFFR). The precise rate
          is determined by finding the volume-weighted median rate of all fed
          funds loans. . .
        </p>
      </Box> */}
      <ArticlesList email={user.email} />
    </Box>
  );
}

function ArticlesList({ email }) {
  const { data, error } = useSWR(`/api/article/?email=${email}`, fetcher);

  if (!data) {
    return <>...loading</>;
  }
  if (error) {
    return <>error</>;
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
