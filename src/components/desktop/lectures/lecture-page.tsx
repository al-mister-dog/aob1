import { Box, createStyles, Flex } from "@mantine/core";
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
    boxShadow: colors.shadow,
  },
}));

export default function LecturePath({
  slug,
  title,
  sources,
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
          sources={sources}
          nextLecture={nextLecture}
        />
      ) : (
        <>
          <Box
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: colors.background1,
            }}
          >
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
          </Box>
          <Box mt={100} style={{ position: "sticky", bottom: 0 }}>
            {keyTermsIds.length > 0 && <KeyTerms ids={keyTermsIds} />}

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
