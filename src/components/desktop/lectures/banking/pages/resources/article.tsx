import Assignment from "./assignment";
import Main from "../../../../../shared-ui/SpoilerText";
import Title from "./title";
import { Box } from "@mantine/core";

export default function Article({ slug, title, text, assignment }) {
  return (
    <>
      <Box
        style={{
          padding: `0px 200px 0px 50px`,
          marginTop: "50px",
        }}
      >
        <Title slug={slug} title={title} />
        <Box mt={25}>
          <Main text={text} />
        </Box>
      </Box>

      <Box mt={50} mb={25} ml={50} style={{ width: 500 }}>
        <Assignment assignment={assignment} />
      </Box>
    </>
  );
}
