import { useHover } from "@mantine/hooks";
import { Card } from "@mantine/core";
import { colors } from "../../../../config/colorPalette";

interface Props {
  cardKey: string | number;
  height: string;
  hoverBorder?: string;
  onClick: (v: any) => void;
  children: React.ReactNode;
}

export default function LectureCard({
  cardKey,
  height,
  hoverBorder,
  onClick,
  children,
}: Props) {
  const { hovered, ref } = useHover();

  return (
    <Card
      key={cardKey}
      ref={ref}
      withBorder
      shadow="sm"
      p="sm"
      radius="xs"
      style={{
        maxHeight: height,
        backgroundColor: colors.background2,
        paddingBottom: "0px",
        cursor: "pointer",
        border: hovered ? hoverBorder : "",
      }}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
