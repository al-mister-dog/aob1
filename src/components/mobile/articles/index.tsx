import { Box } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import { aboutTexts } from "../../../config/texts/articles/about";
import { Paragraph } from "../../shared-ui/texts/Paragraph";

export default function ArticlesIndexPage() {
  return (
    <Box style={{ marginTop: 155 }}>
      <h1
        style={{
          color: colors.text,
          textAlign: "center",
          letterSpacing: 1.5,
          padding: 0,
          margin: 0,
          marginTop: 5,
        }}
      >
        Articles
      </h1>
      <Box mt={25} ml={25} mr={25}>
        <Paragraph>
          {aboutTexts[0]}
        </Paragraph>
        <Paragraph>
        {aboutTexts[1]}
        </Paragraph>
        <Paragraph>
        {aboutTexts[2]}
        </Paragraph>
      </Box>
    </Box>
  );
}
