import { Box, Flex, Text, useMantineTheme } from "@mantine/core";
import Board from "./ui/board";
import ArticleText from "../../../../../shared-ui/texts/Text-Mobile";
import ArticleTitle from "../../../../../shared-ui/components/bread-crumbs/articles";
import { colors } from "../../../../../../config/colorPalette";
import { NextLink, PrevLink } from "./ui/links";
interface Props {
  prevPath?: string;
  prevLinkTitle?: string;
  nextPath: string;
  nextLinkTitle: string;
  texts: any;
  FlorencePlayers: any[];
  LyonsPlayers: any[];
}
export default function PartTwo({
  prevPath,
  prevLinkTitle,
  nextPath,
  nextLinkTitle,
  texts,
  FlorencePlayers,
  LyonsPlayers,
}: Props) {
  const theme = useMantineTheme();

  return (
    <>
      <Box ml={30} mt={100}>
        <ArticleTitle title={texts.title} />
      </Box>

      {texts.paragraphs.map((paragraph) => (
        <ArticleText key={paragraph}>{paragraph}</ArticleText>
      ))}
      <Box>
        <Text
          size="sm"
          weight="bold"
          style={{
            padding: "30px",
            paddingBottom: 0,
            letterSpacing: "1px",
            color: colors.text,
          }}
        >
          {texts.assignment}
        </Text>
      </Box>
      <Board FlorencePlayers={FlorencePlayers} LyonsPlayers={LyonsPlayers} />

      <Flex
        mt={100}
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "center", sm: "space-between" }}
        align={{ base: "center", sm: "space-between" }}
      >
        <Box
          style={{
            marginRight: "auto",
          }}
        >
          <Box
            style={{
              marginRight: "auto",
            }}
          >
            {prevPath && (
              <PrevLink prevPath={prevPath} prevLinkTitle={prevLinkTitle} />
            )}
          </Box>
        </Box>
        <Box
          style={{
            marginLeft: "auto",
          }}
        >
          <NextLink nextPath={nextPath} nextLinkTitle={nextLinkTitle} />
        </Box>
      </Flex>
    </>
  );
}
