import { Box, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Title from "../../../../../shared-ui/texts/Title";
import ArticleText from "../../../../../shared-ui/texts/Text-Mobile";
import { ChevronRight } from "tabler-icons-react";
import Board from "./ui/board";
import { colors } from "../../../../../../config/colorPalette";
import NextArticleLink from "../../../../../shared-ui/next-article-card";
import ArticleTitle from "../../../../../shared-ui/components/bread-crumbs/articles";

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

      <Box p={25} style={{ display: "flex" }}>
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
