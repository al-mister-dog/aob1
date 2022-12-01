import { Button, Menu } from "@mantine/core";
import { BuildingBank } from "tabler-icons-react";
import { colors } from "../../../../../../../config/colorPalette";
import BankSettingsContainer from "./container";

export default function BankSettingsButton() {
  return (
    <>
      <Menu width={300} shadow="md" transition="pop" transitionDuration={150}>
        <Menu.Target>
          <Button
            size="xs"
            leftIcon={<BuildingBank strokeWidth={1.5} />}
            styles={{
              root: {
                color: colors.textColor,
                border: `1px solid ${colors.textColor}`,
                backgroundColor: colors.background2,
              },
            }}
            variant="outline"
          >
            Bank Settings
          </Button>
        </Menu.Target>
        <Menu.Dropdown p={0}>
          <BankSettingsContainer />
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
