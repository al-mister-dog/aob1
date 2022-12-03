import { Box, Center, useMantineTheme } from "@mantine/core";
import Caption from "../../texts/Caption";
import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import Text from "../../../../shared-ui/texts/Text-Mobile";
import Link from "next/link";
import RuleOf72Formula from "./rule-of-72-formula";
import RuleOf72Comparison from "./rule-of-72-comparison";
import Inversions from "./inversions";
import ExactDoublingFormula from "./exact-doubling-formula";
import ExactDoublingIntervals from "./exact-doubling-intervals";
import ExactDoublingComparison from "./exact-doubling-comparison";
import { pageTexts } from "../../../../../config/texts/articles/dictionary/interest/compound-doubling";

export default function CompoundInterestPage() {
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
      <Text>{pageTexts[0]}</Text>
      <br></br>
      <Center>
        <SubTitle>Rule of 72</SubTitle>
      </Center>
      <Text>{pageTexts[1]}</Text>
      <RuleOf72Formula />
      <Text>{pageTexts[2]}</Text>
      <RuleOf72Comparison />

      <Center mt={100}>
        <SubTitle>Exact Doubling Time Formula</SubTitle>
      </Center>
      <Text>{pageTexts[3]}</Text>
      <Text>{pageTexts[4]}</Text>
      <Inversions />
      <Text>{pageTexts[5]}</Text>
      <Text>{pageTexts[6]}</Text>
      <Text>{pageTexts[7]}</Text>
      <ExactDoublingFormula />

      <Text>{pageTexts[8]}</Text>
      <ExactDoublingComparison />
      <Text>{pageTexts[9]}</Text>
      <ExactDoublingIntervals />
      <Text>{pageTexts[10]}</Text>

      <Center mt={100}>
        <SubTitle>Ancient Mesopotamia</SubTitle>
      </Center>
      <Text>{pageTexts[11]}</Text>
    </>
  );
}
