import { Box, createStyles, Divider, Flex } from "@mantine/core";
import Toolbar from "./interactive-ui/settings/toolbar";
import Article from "./lectures/article";
import KeyTerms from "./lectures/key-terms";
import BalanceSheets from "./interactive-ui/cards/card-list";
import Charts from "./charts";
import NextLectureLink from "../shared-ui/next-lecture-link";

import { colors } from "../../config/colorPalette";
import Assignment from "./lectures/assignment";
import Sources from "./lectures/sources";
import PrevLectureCard from "../shared-ui/prev-lecture-card";
import NextLectureCard from "../shared-ui/next-lecture-card";
const useStyles = createStyles((theme) => ({
  interactiveUiContainer: {
    backgroundColor: colors.background1,
    // paddingBottom: "200px",
  },
  keyTermsContainer: {
    backgroundColor: colors.background1,
    margin: 10,
    paddingBottom: "50px",
  },
  balanceSheets: {
    padding: 16,
  },
}));

export default function LecturePageMobile({
  slug,
  title,
  text,
  assignment,
  keyTermsIds,
  nextLecture,
}) {
  const { classes } = useStyles();

  return (
    <>
      {title === "Introduction" ? (
        <>
          <Article slug={slug} title={title} text={text} />
          <Box mt={100}>
            <Sources assignment={assignment} nextLecture={nextLecture} />
          </Box>
        </>
      ) : (
        <>
          <Article slug={slug} title={title} text={text} />
          <Box mt={100}>
            <Assignment assignment={assignment} />
          </Box>

          <Box className={classes.interactiveUiContainer}>
            <Box
              style={{
                marginTop: "25px",
                padding: "5px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Toolbar />
            </Box>
            <BalanceSheets />
            <Charts />
          </Box>
          <Box mt={100} className={classes.keyTermsContainer}>
            <KeyTerms ids={keyTermsIds} />
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
                <PrevLectureCard prevLecture={nextLecture} />
              </Box>
              <Box
                style={{
                  marginLeft: "auto",
                }}
              >
                <NextLectureCard nextLecture={nextLecture} />
              </Box>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
}
