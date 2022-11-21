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
import { colors } from "../../../../../../../config/colorPalette";
import { cityColor } from "./utils/city-color";
import RecordsPanel from "./records-panel";
import BillsPanel from "./bills-panel";
// import BillsPanel from "./bills/panel";

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

function SidePanel({ player }) {
  const { classes } = useStyles();

  return (
    <Card
      p="sm"
      withBorder
      radius="xs"
      shadow="sm"
      style={{
        paddingBottom: "0px",
        height: "30.5rem",
        backgroundColor: colors.background2,
      }}
    >
      <Card.Section className={`${classes.header}`}>
        <Center>
          <Title order={2} color={cityColor(player, 9)}>
            {player.id}: {player.city}
          </Title>
        </Center>
      </Card.Section>
      <Tabs color={cityColor(player, 9)} defaultValue="actions">
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
          <RecordsPanel player={player} />
        </Tabs.Panel>
        <Tabs.Panel value="actions" pt="xs">
          <ActionsPanel player={player} />
        </Tabs.Panel>

        <Tabs.Panel value="bills" pt="xs">
          <BillsPanel player={player} />
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}

export default React.memo(SidePanel);
