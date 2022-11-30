import { useAppSelector } from "../../../app/hooks";
import { selectActions } from "../../../features/actions/actionsSlice";
import {
  Box,
  Center,
  createStyles,
  Group,
  Tabs,
  useMantineTheme,
} from "@mantine/core";
import { lectureRoutes } from "../../../config/routes/lectureRoutes";
import { Accordion, List, Text } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../../config/colorPalette";
import { Router, School } from "tabler-icons-react";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  listItem: {
    borderLeft: "1px solid gray",
    padding: "5px 0px 5px 20px",
    "&:hover": {
      backgroundColor: theme.colors.violet[0],
      borderLeft: "1px solid blue",
    },
  },
  navbar: {
    paddingTop: 0,
    borderRight: `1px solid ${colors.muiGray}`,
    backgroundColor: "#fff",
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },
}));

export default function LecturesContent() {
  const router = useRouter();
  function onClickTab(val: string) {
    if (val === "banking") {
      router.replace("/lectures");
    } else if (val === "finance") {
      router.replace("/lectures/finance");
    }
  }
  return (
    <>
      <Box mt={10}>
        <Center>
          <Group>
            <School color="purple" />
            <Text style={{ color: colors.text }}>Lectures</Text>
          </Group>
        </Center>
      </Box>
      <Tabs mt={10} color="violet" defaultValue="banking">
        <Tabs.List position="center">
          <Tabs.Tab value="banking" onClick={() => onClickTab("banking")}>
            Banking
          </Tabs.Tab>
          <Tabs.Tab value="finance" onClick={() => onClickTab("finance")}>
            Finance
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="banking" pt="xs">
          <MoneyAndBankingLectures />
        </Tabs.Panel>
        <Tabs.Panel value="finance" pt="xs">
          <Text>Finance Course Coming Soon...</Text>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

function MoneyAndBankingLectures() {
  const { currentLectureId } = useAppSelector(selectActions);
  const { classes } = useStyles();
  return (
    <Accordion variant="filled">
      {lectureRoutes.routes.map((route) => {
        const { id, title, path, routes } = route;
        return (
          <Accordion.Item value={title} key={id}>
            <Accordion.Control>
              <Link
                href={{
                  pathname: path,
                  query: { id },
                }}
              >
                <Text size={14.2} weight={500}>
                  {title}
                </Text>
              </Link>
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {routes.map((route: any) => {
                  const { id, title, path } = route;

                  return (
                    <div key={id}>
                      <List.Item
                        className={classes.listItem}
                        style={{
                          cursor: "pointer",
                          background:
                            currentLectureId === id ? colors.background3 : "",
                        }}
                      >
                        <Link
                          href={{
                            pathname: `/lectures${path}`,
                            query: { path, id },
                          }}
                          as={`/lectures${path}`}
                          passHref
                        >
                          <Text size={13.9}>{title}</Text>
                        </Link>
                      </List.Item>
                    </div>
                  );
                })}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
