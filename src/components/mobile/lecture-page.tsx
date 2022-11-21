import { Box, createStyles } from "@mantine/core";
import Toolbar from "./interactive-ui/settings/toolbar";
import Article from "./lectures/article";
import KeyTerms from "./lectures/key-terms";
import BalanceSheets from "./interactive-ui/cards/card-list";
import Charts from "./charts";
import NextLectureLink from "../shared-ui/next-lecture-link";

import { colors } from "../../config/colorPalette";
import Assignment from "./lectures/assignment";
import Sources from "./lectures/sources";
const useStyles = createStyles((theme) => ({
  interactiveUiContainer: {
    backgroundColor: colors.background1,
    paddingBottom: "200px",
  },
  keyTermsContainer: {
    backgroundColor: colors.background1,
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
          <Sources assignment={assignment} nextLecture={nextLecture} />
        </>
      ) : (
        <>
          <Article slug={slug} title={title} text={text} />
          <Box mt={100}>
            <Assignment assignment={assignment} nextLecture={nextLecture} />
          </Box>

          <Box className={classes.interactiveUiContainer}>
            <Box
              style={{
                marginBottom: "25px",
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
          <Box className={classes.keyTermsContainer}>
            <KeyTerms ids={keyTermsIds} />
            <Box style={{ padding: "50px", backgroundColor: "inherit" }}>
              <NextLectureLink nextLecture={nextLecture} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
