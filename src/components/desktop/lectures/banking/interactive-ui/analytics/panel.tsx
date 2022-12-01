import {
  Card,
  Box,
  Center,
  Title,
  Tabs,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

import React from "react";
import FlowsPanel from "./flow-of-funds-matrix.tsx/table";
import { colors } from "../../../../../../config/colorPalette";

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
    <Box
      p={5}
      style={{
        minHeight: "30rem",
        backgroundColor: colors.background2,
      }}
    >
      <Box mb="xs" p="xs">
        <Center>
          <h4 style={{ margin: 0, padding: 0, color: colors.textColor }}>
            Analytics
          </h4>
        </Center>
      </Box>
      <Tabs color="violet" defaultValue="actions">
        <Tabs.List grow>
          <Tabs.Tab value="relations">
            <Text color={colors.text} weight="bold">
              Relations
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="statistics">
            <Text color={colors.text} weight="bold">
              Statistics
            </Text>
          </Tabs.Tab>
          <Tabs.Tab value="flows">
            <Text color={colors.text} weight="bold">
              Flows
            </Text>
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
    </Box>
  );
}

export default React.memo(Analytics);
