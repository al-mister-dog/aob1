import { Box, Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

export default function ArticlesIndexPage() {
  return (
    
    <div style={{ marginTop: 100 }}>
      <Box ml={50} mr={200}>
        <h1 style={{ color: colors.text }}>Articles</h1>
        <Box mt={40}>
          <Text style={{ color: colors.text, letterSpacing: 1 }}>
            The articles section of this site seeks to explain complex concepts
            in a way that anyone can understand, using interactive interfaces to
            grasp concepts and analysis that are often shrouded in jargon. The
            interactive calculators and graphs allow the reader to see whats
            going on under the hood and figure out whats going on behind the
            scenes of economic analysis.
          </Text>
          <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
            The reader will learn that these concepts cannot be taken for
            granted as things that exist in the real world, but are
            methodologies employed by economists to understand complex real
            world phenomena. The reader can then judge the accuracy and worth of
            these methodologies.
          </Text>
          <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
            For each concept given, this site will hopefuly provide useful
            analysis of methodologies employed by economists from across the
            range of economic and political thought.
          </Text>
        </Box>
      </Box>
    </div>
  );
}
