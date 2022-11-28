import { Group, Header } from "@mantine/core";

import { colors } from "../../../../../config/colorPalette";
import BankSettingsButton from "./bank-settings/button";
import DisplaySettingsButton from "./display-settings/button";
import RefreshButton from "./display-settings/refresh-button";

export default function Toolbar() {
  return (
    <Header height={60} px="md" style={{ backgroundColor: colors.background1 }}>
      <Group position="center" sx={{ height: "100%" }}>
        <RefreshButton />
        <BankSettingsButton />
        <DisplaySettingsButton />
      </Group>
    </Header>
  );
}
