import { Box, Center, Text, useMantineTheme } from "@mantine/core";
import DisplayRadioGroup from "./menu-displays";
import ColorsMenu from "./menu-colors";
import { colors } from "../../../../../../../config/colorPalette";

export default function Desktop() {
  const theme = useMantineTheme();

  return (
    <Box
      p={10}
      style={{
        backgroundColor: colors.background2,
        overflow: "visible",
      }}
    >
      <Box
        mb="xs"
        p="xs"
        style={{ borderBottom: `1px solid ${colors.textColor}` }}
      >
        <Center>
          <h4 style={{ margin: 0, padding: 0, color: colors.textColor }}>
            Display Settings
          </h4>
        </Center>
      </Box>
      <Box
        style={{
          width: "70%",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        <Box>
          <Text size="sm" weight="bold" style={{ color: colors.textColor }}>
            Balancesheet Display
          </Text>
          <DisplayRadioGroup />
        </Box>

        <ColorsMenu />
      </Box>
    </Box>
  );
}
