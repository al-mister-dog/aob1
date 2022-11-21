import { useMantineTheme, ActionIcon, Drawer, Button } from "@mantine/core";
import { useState } from "react";
import { DotsVertical } from "tabler-icons-react";
import RefreshBalanceSheets from "./refresh-button";
import SettingsDrawer from "./container";
import { colors } from "../../../../config/colorPalette";
import { Settings } from "tabler-icons-react";

export default function Toolbar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <RefreshBalanceSheets />

      <Button
        size="xs"
        leftIcon={<Settings strokeWidth={1} />}
        styles={{
          root: {
            color: colors.textColor,
            border: `1px solid ${colors.muiGray}`,
            backgroundColor: colors.background2,
            fontWeight: "lighter",
          },
        }}
        variant="outline"
        onClick={() => setOpened(true)}
      >
        Display Settings
      </Button>

      <Drawer position="right" opened={opened} onClose={() => setOpened(false)}>
        <SettingsDrawer setOpened={setOpened} />
      </Drawer>
    </>
  );
}
