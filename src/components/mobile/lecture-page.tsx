import { Box, createStyles, Flex } from "@mantine/core";
import Toolbar from "./interactive-ui/settings/toolbar";
import Article from "./lectures/article";
import KeyTerms from "./lectures/key-terms";
import BalanceSheets from "./interactive-ui/cards/card-list";
import Charts from "./charts";
import { colors } from "../../config/colorPalette";
import Assignment from "./lectures/assignment";
import Sources from "./lectures/sources";
import PrevLectureCard from "../shared-ui/prev-lecture-card";
import NextLectureCard from "../shared-ui/next-lecture-card";

const useStyles = createStyles((theme) => ({
  interactiveUiContainer: {
    backgroundColor: colors.background1,
    paddingBottom: "50px",
    borderBottom: `1px solid ${colors.muiGray}`,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    boxShadow:
      "0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px",
  },
  keyTermsContainer: {
    backgroundColor: colors.background1,
    margin: 10,
    // paddingBottom: "50px",
    position: "sticky",
    bottom: -500,
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
          <Box style={{ position: "relative", zIndex: 1, backgroundColor: colors.background1 }}>
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
