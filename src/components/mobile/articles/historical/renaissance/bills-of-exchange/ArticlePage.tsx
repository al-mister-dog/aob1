import { Box, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import Title from "../../../../../shared-ui/texts/Title";
import ArticleText from "../../../../../shared-ui/texts/Text-Mobile";
import SubTitle from "../../../texts/Subtitle";
import Board from "./ui/board";
import Caption from "../../../texts/Caption";

export default function PartTwo({
  path,
  linkTitle,
  texts,
  florencePlayers,
  lyonsPlayers,
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
      <Board florencePlayers={florencePlayers} lyonsPlayers={lyonsPlayers} />

      <Box p={25}>
        <SubTitle>
          Go to{" "}
          <Link href={path} style={{ color: theme.colors.violet[9] }}>
            {linkTitle}. . .
          </Link>
        </SubTitle>
      </Box>
    </>
  );
}
