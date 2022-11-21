import {
  Card,
  Center,
  Title,
  Tabs,
  Text,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
// import { CardInfo } from "../types";
import ActionsPanel from "./actions-panel";
import React from "react";
import { cityColor } from "./utils/city-color";
// import RecordsPanel from "./records-panel";
// import BillsPanel from "./bills-panel";

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

function SidePanel({ player, setOpened }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <>
      <Center>
        <Title order={2} color={cityColor(player, 9)}>
          {player.id}
        </Title>
      </Center>

      <Tabs color={cityColor(player, 9)} defaultValue="records">
        <Tabs.List grow>
          <Tabs.Tab value="records">
            <Text color={cityColor(player, 9)}>Records</Text>
          </Tabs.Tab>
          <Tabs.Tab value="actions">
            <Text color={cityColor(player, 9)}>Actions</Text>
          </Tabs.Tab>
          <Tabs.Tab value="bills">
            <Text color={cityColor(player, 9)}>Bills</Text>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="records" pt="xs">
          {/* <RecordsPanel bank={bank} /> */}
        </Tabs.Panel>
        <Tabs.Panel value="actions" pt="xs">
          <ActionsPanel player={player} setOpened={setOpened}/>
        </Tabs.Panel>

        <Tabs.Panel value="bills" pt="xs">
          {/* <BillsPanel bank={bank} /> */}
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

export default React.memo(SidePanel);
