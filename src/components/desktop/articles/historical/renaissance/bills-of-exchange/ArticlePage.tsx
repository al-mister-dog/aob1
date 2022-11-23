import { Box, Flex, Text } from "@mantine/core";
import Board from "./ui/board";
import ArticleTitle from "../../../../../shared-ui/components/bread-crumbs/articles";
import SpoilerText from "../../../../../shared-ui/SpoilerText";
import { colors } from "../../../../../../config/colorPalette";
import { NextLink, PrevLink } from "./links";

interface Props {
  prevPath?: string;
  prevLinkTitle?: string;
  nextPath: string;
  nextLinkTitle: string;
  texts: any;
  FlorencePlayers: any[];
  LyonsPlayers: any[];
}
export default function ArticlePage({
  prevPath,
  prevLinkTitle,
  nextPath,
  nextLinkTitle,
  texts,
  FlorencePlayers,
  LyonsPlayers,
}: Props) {
  return (
    <>
      <Box mt={50} style={{ padding: `0px 200px 0px 50px` }}>
        <ArticleTitle title={texts.title} />
      </Box>
      <Box ml={50} mr={200}>
        <SpoilerText text={texts.paragraphs}></SpoilerText>
      </Box>

      <Box mt={50} mb={25} ml={50} style={{ width: "500px" }}>
        <Text
          weight="bold"
          style={{
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
