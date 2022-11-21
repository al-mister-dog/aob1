import { Box, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import ArticleText from "../../../../../shared-ui/texts/Article-Text";
import Board from "./ui/board";
import Caption from "../../../../../shared-ui/texts/Caption";
import { ChevronRight } from "tabler-icons-react";
import ArticleTitle from "../../../../../shared-ui/components/bread-crumbs/articles";
import SpoilerText from "../../../../../shared-ui/SpoilerText";
import { colors } from "../../../../../../config/colorPalette";

export default function PartTwo({
  path,
  linkTitle,
  texts,
  FlorencePlayers,
  LyonsPlayers,
}) {
  const theme = useMantineTheme();

  return (
    <>
      <Box mt={50} style={{ padding: `0px 200px 0px 50px` }}>
        <ArticleTitle title={texts.title} />
      </Box>
      <Box ml={50} mr={200}>
        <SpoilerText text={texts.paragraphs}></SpoilerText>
      </Box>

      <Box mt={50} mb={25} ml={50}style={{width: "500px"}}>
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

      <Box p={25} mt={50}style={{ display: "flex" }}>
        <Box style={{ flex: 1 }}>
          <Text weight="bold" align="right">
            NEXT
          </Text>
          <Text weight="bold" align="right">
            <Link href={path} style={{ color: theme.colors.violet[9] }}>
              {linkTitle}
            </Link>
          </Text>
        </Box>
        <Box
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ChevronRight color="black" />
        </Box>
      </Box>
    </>
  );
}
