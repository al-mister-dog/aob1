import { useMantineTheme } from "@mantine/core";

export function cityColor(player, depth?: number) {
  const theme = useMantineTheme();
  if (depth) {
    return player.city === "Florence"
      ? theme.colors.violet[depth]
      : theme.colors.indigo[depth];
  } else {
    return player.city === "Florence" ? "violet" : "indigo";
  }
}
