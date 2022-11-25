import { Box, createStyles, Flex, Group } from "@mantine/core";
import { Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import NextLectureCard from "../../shared-ui/next-lecture-card";
import PrevLectureCard from "../../shared-ui/prev-lecture-card";
import Main from "../../shared-ui/SpoilerText";
import Title from "./title";

const useStyles = createStyles((theme) => ({
  item: {
    "& + &": {
      cursor: "pointer",
      color: colors.text,
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
    "&:hover": {
      backgroundColor: theme.colors.violet[0],
    },
  },

  title: {
    lineHeight: 1,
    color: colors.text,
  },
}));

export default function Introduction({
  slug,
  title,
  text,
  sources,
  nextLecture,
}) {
  return (
    <>
      <div
        style={{
          padding: `0px 200px 0px 50px`,
          marginTop: "50px",
        }}
      >
        <Title slug={slug} title={title} />

        <div style={{ marginTop: "25px" }}>
          {text.map((t) => (
            <p
              key={t}
              style={{
                letterSpacing: "1px",
                marginBottom: "25px",
                color: colors.text,
                fontSize: 16,
              }}
            >
              {t}
            </p>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "25px" }}>
        <Sources sources={sources} />
      </div>
      <Flex
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
  );
}

export function Sources({ sources }) {
  const { classes } = useStyles();

  const items = sources.map((item) => (
    <Group position="apart" className={classes.item} noWrap spacing="xl">
      <div>
        <Text>{item.author}</Text>
        <a href={item.link} target="_blank"></a>
        <Text size="xs" style={{ color: colors.textColor }}>
          {item.title}
        </Text>
      </div>
    </Group>
  ));

  return (
    <Box p={50}>
      <Text size="lg" className={classes.title} weight="bold">
        Sources
      </Text>
      <Text size="xs" color="dimmed" mt={3} mb="xl">
        Suggestions for Further Reading
      </Text>
      {items}
    </Box>
  );
}
