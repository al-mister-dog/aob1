import {
  Card,
  Center,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { colors } from "../../../../../../../config/colorPalette";
import LectureCard from "../../../../../../shared-ui/components/card/LectureCard";
import BalanceSheetRowHeading from "./balance-sheet-heading";

export default function CardUI({ bank, selectPlayer }) {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  const rowColor = (depth: number) =>
    bank.city === "Florence"
      ? theme.colors.violet[depth]
      : theme.colors.indigo[depth];

  return (
    <LectureCard
      cardKey={bank.id}
      height="9.75rem"
      hoverBorder={`2px solid ${rowColor(2)}`}
      onClick={() => selectPlayer(bank)}
    >
      <Card.Section style={{ padding: "3px", cursor: "pointer" }}>
        <Center>
          <h4 style={{ color: rowColor(9), padding: 0, margin: 0 }}>
            {bank.id}: {bank.city}
          </h4>
        </Center>
      </Card.Section>
      <Card.Section>
        <SimpleGrid
          cols={2}
          sx={{
            borderBottom: `1px solid ${rowColor(2)}`,
            height: "1.25rem",
          }}
        >
          <Text size="xs" align="center" color={`${rowColor(9)}`}>
            Assets
          </Text>
          <Text size="xs" align="center" color={`${rowColor(9)}`}>
            Liabilities
          </Text>
        </SimpleGrid>
      </Card.Section>
      <Card.Section style={{ padding: "5px" }}>
        <SimpleGrid
          cols={2}
          spacing={5}
          style={{ height: "8.8rem", overflowX: "hidden" }}
        >
          <div
            style={{
              borderRight: `1px solid ${rowColor(2)}`,
            }}
          >
            <BalanceSheetRowHeading
              side="assets"
              color={rowColor(9)}
              bills={bank.assets}
              coins={bank.coinAsset}
            />
          </div>
          <div>
            <BalanceSheetRowHeading
              side="liabilities"
              color={rowColor(9)}
              bills={bank.liabilities}
              coins={bank.coinLiability}
            />
          </div>
        </SimpleGrid>
      </Card.Section>
    </LectureCard>
  );
}
