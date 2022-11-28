import {
  Card,
  Center,
  Title,
  Tabs,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

import React from "react";
import FlowsPanel from "./flow-of-funds-matrix.tsx/table";
import { colors } from "../../../../../config/colorPalette";

const useStyles = createStyles((theme) => ({
  header: { padding: "5px" },
  grape: {
    backgroundColor: theme.colors.grape[8],
  },
  violet: {
    backgroundColor: theme.colors.violet[8],
  },
  indigo: {
    backgroundColor: theme.colors.indigo[8],
  },
  blue: {
    backgroundColor: theme.colors.blue[8],
  },
}));
function Analytics() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Card
      p="sm"
      radius="xs"
      shadow="sm"
      withBorder
      style={{
        paddingBottom: "0px",
        marginTop: 25,
        minHeight: "30rem",
        backgroundColor: colors.background2,
      }}
    >
      <Card.Section className={classes.header}>
        <Center>
          <h2
            style={{
              color: colors.text,
              margin: 0,
              padding: 0,
            }}
          >
            Analytics
          </h2>
        </Center>
      </Card.Section>
      <Tabs color="violet" defaultValue="actions">
        <Tabs.List grow>
          <Tabs.Tab value="relations">
            <Text color={colors.text}>Relations</Text>
          </Tabs.Tab>
          <Tabs.Tab value="statistics">
            <Text color={colors.text}>Statistics</Text>
          </Tabs.Tab>
          <Tabs.Tab value="flows">
            <Text color={colors.text}>Flows</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="relations" pt="xs">
          {/* <RecordsPanel bank={bank} /> */}
        </Tabs.Panel>
        <Tabs.Panel value="statistics" pt="xs">
          {/* <ActionsPanel bank={bank} /> */}
        </Tabs.Panel>

        <Tabs.Panel value="flows" pt="xs">
          <FlowsPanel />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}

export default React.memo(Analytics);
