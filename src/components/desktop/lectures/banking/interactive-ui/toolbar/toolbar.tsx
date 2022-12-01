import { Button, Group, Header, Menu } from "@mantine/core";
import { Graph } from "tabler-icons-react";
import { colors } from "../../../../../../config/colorPalette";
import BankSettingsButton from "./bank-settings/button";
import DisplaySettingsButton from "./display-settings/button";
import RefreshButton from "./display-settings/refresh-button";
import Analytics from "../analytics/panel";

export default function Toolbar() {
  return (
    <Header height={60} px="md" style={{ backgroundColor: colors.background1 }}>
      <Group position="center" sx={{ height: "100%" }}>
        <RefreshButton />
        <BankSettingsButton />
        <DisplaySettingsButton />

        <Menu width={500} shadow="md" transition="pop" transitionDuration={150}>
          <Menu.Target>
            <Button
              size="xs"
              leftIcon={<Graph strokeWidth={1.5} />}
              styles={{
                root: {
                  color: colors.textColor,
                  border: `1px solid ${colors.textColor}`,
                  backgroundColor: colors.background2,
                },
              }}
              variant="outline"
            >
              Analytics
            </Button>
          </Menu.Target>
          <Menu.Dropdown p={0}>
            <Analytics />
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Header>
  );
}
