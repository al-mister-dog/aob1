import { Box, Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

export default function ArticlesIndexPage() {
  return (
    <div style={{ marginTop: 100 }}>
      <Box ml={50} mr={200}>
        <h1 style={{ color: colors.text }}>Articles</h1>
        <Box mt={40}>
          <Text style={{ color: colors.text, letterSpacing: 1 }}>
            This website offers articles that explain complex topics in an
            easy-to-understand way. These articles use interactive tools to help
            readers understand economic analysis without relying on jargon.
            Interactive calculators and graphs are also available, allowing
            readers to see what is happening behind the scenes.
          </Text>
          <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
            The reader will gain an understanding of the concepts used by
            economists to make sense of complex phenomena in the real world.
            They can then evaluate the accuracy and usefulness of these
            concepts.
          </Text>
          <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
            This site hopes to offer useful analysis of the various approaches
            used by economists of different economic and political beliefs for
            each concept.
          </Text>
        </Box>
      </Box>
    </div>
  );
}
