import { Button, Menu } from "@mantine/core";
import DisplaySettingsContainer from "./container";
import { Apps } from "tabler-icons-react";
import { colors } from "../../../../../../config/colorPalette";

export default function DisplaySettingsButton() {
  return (
    <>
      <Menu width={300} shadow="md" transition="pop" transitionDuration={150}>
        <Menu.Target>
          <Button
            size="xs"
            leftIcon={<Apps strokeWidth={1.5} />}
            styles={{
              root: {
                color: colors.textColor,
                border: `1px solid ${colors.textColor}`,
                backgroundColor: colors.background2,
              },
            }}
            variant="outline"
          >
            Display Settings
          </Button>
        </Menu.Target>
        <Menu.Dropdown p={0}>
          <DisplaySettingsContainer />
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
