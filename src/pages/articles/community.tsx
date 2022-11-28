import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import parse from "html-react-parser";
import { Box, Button, Divider, Text } from "@mantine/core";
import { parseDate } from "../../helpers/parseDate";
import { colors } from "../../config/colorPalette";

export default function Article() {
  const { data, error } = useSWR(`/api/articles/`, fetcher);
  if (!data) {
    return <>...loading</>;
  }
  if (error) {
    return <>error</>;
  }

  // const result = data.filter((d) => d.title === "Money and Banking");
  // const article = parse(result[0].body);
  const articles = data.map((d) => {
    return {
      ...d,
      date: parseDate(d.createdAt),
      body: parse(d.body),
    };
  });
  
  
  return (
    <Box p={50} pr={200}>
      <h1>Articles</h1>
      {articles.map((article) => {
        return (
          <Box key={article.id} onClick={() => alert(article.id)}>
            <Box mt={50}>
              <Text color="dimmed" mb={10}>
                {article.date}
              </Text>
              <h3
                style={{ margin: 0, marginBottom: 10, color: colors.textColor }}
              >
                {article.title}
              </h3>
              <p style={{ color: colors.textColor }}>{article.preview}</p>
            </Box>
            <Divider mt={50} />
          </Box>
        );
      })}
    </Box>
  );
}
