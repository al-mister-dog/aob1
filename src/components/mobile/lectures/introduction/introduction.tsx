import { Box } from "@mantine/core";
import ArticleIntro from "./article-intro";
import Sources from "./sources";

export default function Introduction({
  slug,
  title,
  text,
  sources,
  nextLecture,
}) {
  return (
    <>
      <Box p={25}>
        <ArticleIntro slug={slug} title={title} text={text} />
      </Box>
      <Box mt={25}>
        <Sources sources={sources} nextLecture={nextLecture} />
      </Box>
    </>
  );
}
