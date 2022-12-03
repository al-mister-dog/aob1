import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { colors } from "../../config/colorPalette";
import { mediaQuery } from "../../config/media-query";
import { useLoaded } from "../../hooks/useLoaded";

import IndexDesktop from "../../components/desktop/articles";
import IndexMobile from "../../components/mobile/articles";
import { aboutTexts } from "../../config/texts/articles/about";

export default function ArticlesIndexPage() {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);
  if (loaded) {
    return isMobile ? <IndexMobile /> : <IndexDesktop />;
  }
  return (
    <div style={{ marginTop: 100 }}>
      <Box ml={50} mr={200}>
        <h1 style={{ color: colors.text }}>Articles</h1>
        <Box mt={40}>
          <Text style={{ color: colors.text, letterSpacing: 1 }}>
            {aboutTexts[0]}
          </Text>
          <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
            {aboutTexts[1]}
          </Text>
          <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
          {aboutTexts[2]}
          </Text>
        </Box>
      </Box>
    </div>
  );
}
