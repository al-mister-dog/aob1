import { Box, Center, useMantineTheme } from "@mantine/core";
import Caption from "../../texts/Caption";
import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import ArticleText from "../../../../shared-ui/texts/Article-Text";
import Link from "next/link";
import RuleOf72Formula from "./rule-of-72-formula";
import RuleOf72Comparison from "./rule-of-72-comparison";
import { Bold } from "tabler-icons-react";
import Inversions from "./inversions";
import ExactDoublingFormula from "./exact-doubling-formula";
import ExactDoublingComparison from "./exact-doubling-comparison";
import ExactDoublingInterval from "./exact-doubling-intervals";
import { pageTexts } from "../../../../../config/texts/articles/dictionary/interest/compound-doubling";

export default function CompoundInterestDoubling() {
  const theme = useMantineTheme();
  return (
    <>
      <Box ml={25} mt={200}>
        <Title>Compound Interest Doubling</Title>
      </Box>
      <Caption>
        For a basic introduction to compound interest, see our{" "}
        <Link
          href="compound-interest"
          style={{ color: theme.colors.violet[9] }}
        >
          compound interest introduction article
        </Link>
      </Caption>
      <ArticleText>{pageTexts[0]}</ArticleText>
      <br></br>
      <Center>
        <SubTitle>Rule of 72</SubTitle>
      </Center>
      <ArticleText>{pageTexts[1]}</ArticleText>
      <RuleOf72Formula />
      <ArticleText>
        {pageTexts[2]}
        <span style={{ fontStyle: "italic" }}>(A = P(1+r)^t)</span>.
      </ArticleText>
      <RuleOf72Comparison />

      <Center mt={100}>
        <SubTitle>Exact Doubling Time Formula</SubTitle>
      </Center>
      <ArticleText>{pageTexts[3]}</ArticleText>
      <ArticleText>{pageTexts[4]}</ArticleText>
      <Inversions />
      <ArticleText>{pageTexts[5]}</ArticleText>
      <ArticleText>{pageTexts[6]}</ArticleText>
      <ArticleText>{pageTexts[7]}</ArticleText>
      <ExactDoublingFormula />
      <ArticleText>{pageTexts[8]}</ArticleText>
      <ExactDoublingComparison />
      <ArticleText>{pageTexts[9]}</ArticleText>
      <ExactDoublingInterval />
      <ArticleText>{pageTexts[10]}</ArticleText>

      <Center mt={100}>
        <SubTitle>Ancient Mesopotamia</SubTitle>
      </Center>
      <ArticleText>{pageTexts[11]}</ArticleText>
    </>
  );
}
