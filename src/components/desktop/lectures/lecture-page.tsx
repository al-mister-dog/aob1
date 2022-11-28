import { Box, createStyles } from "@mantine/core";
import IntroductionPage from "./introduction";
import Article from "./article";
import Toolbar from "./interactive-ui/toolbar/toolbar";
import InteractiveUI from "./interactive-ui/layout";
import KeyTerms from "./key-terms";
import Links from "./links";
import { colors } from "../../../config/colorPalette";

const useStyles = createStyles(() => ({
  articleContainer: {
    position: "relative",
    zIndex: 1,
    backgroundColor: colors.background1,
  },
  interactiveUiContainer: {
    marginTop: 25,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    boxShadow: colors.shadow,
  },
  articleFooterContainer: { marginTop: 100, position: "sticky", bottom: 0 },
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
        <IntroductionPage
          slug={slug}
          title={title}
          text={text}
          sources={sources}
          nextLecture={nextLecture}
        />
      ) : (
        <>
          <Box className={classes.articleContainer}>
            <Article
              slug={slug}
              title={title}
              text={text}
              assignment={assignment}
            />
            <Box className={classes.interactiveUiContainer}>
              <Toolbar />
              <InteractiveUI />
            </Box>
          </Box>
          <Box className={classes.articleFooterContainer}>
            {keyTermsIds.length > 0 && <KeyTerms ids={keyTermsIds} />}
            <Links lecture={nextLecture} />
          </Box>
        </>
      )}
    </>
  );
}
