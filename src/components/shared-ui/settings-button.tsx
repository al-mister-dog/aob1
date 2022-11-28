import { Button } from "@mantine/core";
import { colors } from "../../config/colorPalette";

interface Props {
  onClick?: (v: any) => void;
  icon: React.ReactNode;
  label: string;
}
export default function SettingsButton({ onClick, icon, label }: Props) {
  return (
    <Button
      size="xs"
      leftIcon={icon}
      styles={{
        root: {
          color: colors.textColor,
          border: `1px solid ${colors.textColor}`,
          backgroundColor: colors.background2,
        },
      }}
      variant="outline"
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
