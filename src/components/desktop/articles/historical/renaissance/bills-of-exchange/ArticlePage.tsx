import { Box, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Title from "../../../../../shared-ui/texts/Title";
import ArticleText from "../../../../../shared-ui/texts/Article-Text";
import SubTitle from "../../../texts/Subtitle";
import Board from "./ui/board";
import Caption from "../../../../../shared-ui/texts/Caption";
import { ChevronRight } from "tabler-icons-react";

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
      <Box ml={25} mt={200}>
        <Title>{texts.title}</Title>
      </Box>

      {texts.paragraphs.map((paragraph) => (
        <ArticleText key={paragraph}>{paragraph}</ArticleText>
      ))}
      <Box>
        <Caption>{texts.assignment}</Caption>
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
