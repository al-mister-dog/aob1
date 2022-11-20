import { Button } from "@mantine/core";
import { RefreshDot } from "tabler-icons-react";
import { colors } from "../../../config/colorPalette";

export default function RefreshButton({ onClick }) {
  return (
    <Button
      size="xs"
      leftIcon={<RefreshDot strokeWidth={1} />}
      styles={{
        root: {
          color: colors.textColor,
          border: `1px solid ${colors.muiGray}`,
          backgroundColor: colors.background2,
          fontWeight: "lighter",
        },
      }}
      variant="outline"
      onClick={onClick}
    >
      Refresh
    </Button>
  );
}
