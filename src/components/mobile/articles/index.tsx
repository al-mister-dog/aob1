import { Box } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
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
          The articles section of this site seeks to explain complex concepts in
          a way that anyone can understand, using interactive interfaces to
          grasp concepts and analysis that are often shrouded in jargon. The
          interactive calculators and graphs allow the reader to see whats going
          on under the hood and figure out whats going on behind the scenes of
          economic analysis.
        </Paragraph>
        <Paragraph>
          The reader will learn that these concepts cannot be taken for granted
          as things that exist in the real world, but are methodologies employed
          by economists to understand complex real world phenomena. The reader
          can then judge the accuracy and worth of these methodologies.
        </Paragraph>
        <Paragraph>
          For each concept given, this site will hopefuly provide useful
          analysis of methodologies employed by economists from across the range
          of economic and political thought.
        </Paragraph>
      </Box>
    </Box>
  );
}
