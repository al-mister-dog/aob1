import { Text, Group, Box, Flex, createStyles } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import NextLectureCardMobile from "../../shared-ui/next-lecture-card-mobile";
import PrevLectureCardMobile from "../../shared-ui/prev-lecture-card-mobile";

const useStyles = createStyles((theme) => ({
  item: {
    "& + &": {
      color: colors.text,
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  title: {
    lineHeight: 1,
    color: colors.text,
  },
}));

export default function Sources({ sources, nextLecture }) {
  return (
    <>
      <SourcesCard sources={sources} />

      <Flex
        mt={25}
        mb={50}
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "center", sm: "space-between" }}
        align={{ base: "center", sm: "space-between" }}
      >
        <Box
          style={{
            marginRight: "auto",
          }}
        >
          <PrevLectureCardMobile prevLecture={nextLecture} />
        </Box>
        <Box
          style={{
            marginLeft: "auto",
          }}
        >
          <NextLectureCardMobile nextLecture={nextLecture} />
        </Box>
      </Flex>
    </>
  );
}

export function SourcesCard({ sources }) {
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
    <Box p={25}>
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
