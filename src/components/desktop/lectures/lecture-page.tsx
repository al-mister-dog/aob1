import { Box, Card, createStyles, Flex, SimpleGrid } from "@mantine/core";
import KeyTerms from "./key-terms";
import Article from "./article";

import LayoutDesktop from "./interactive-ui/layout";
import { colors } from "../../../config/colorPalette";
import NextLectureCard from "../../shared-ui/next-lecture-card";
import Introduction from "./introduction";
import PrevLectureCard from "../../shared-ui/prev-lecture-card";

const useStyles = createStyles(() => ({
  interactiveUiContainer: {
    backgroundColor: colors.background3,
    paddingBottom: "25px",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    boxShadow:
      "0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px, rgb(0 0 0 / 4%) 0px 7px 7px -5px",
    zIndex: 99999,
  },
}));

export default function LecturePath({
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
        <Introduction
          slug={slug}
          title={title}
          text={text}
          assignment={assignment}
          nextLecture={nextLecture}
        />
      ) : (
        <>
          <Article
            slug={slug}
            title={title}
            text={text}
            assignment={assignment}
            nextLecture={nextLecture}
          />
          <div className={classes.interactiveUiContainer}>
            <LayoutDesktop />
          </div>

          {keyTermsIds.length > 0 && (
            <Box mt={100}>
              <KeyTerms ids={keyTermsIds} />
            </Box>
          )}

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
        </>
      )}
    </>
  );
}
