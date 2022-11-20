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
import BalanceSheetRowHeading from "./balance-sheet-heading";

export default function CardUI({ bank, selectPlayer }) {
  const theme = useMantineTheme();

  const rowColor = (depth: number) =>
    bank.city === "Florence"
      ? theme.colors.violet[depth]
      : theme.colors.indigo[depth];

  const { hovered, ref } = useHover();
  return (
    <Card
      key={bank.id}
      withBorder
      shadow="sm"
      p="sm"
      radius="xs"
      m={10}
      style={{
        width: "20rem",
        height: "8rem",
        backgroundColor: "#FFFFFC",
        paddingBottom: "0px",
        cursor: "pointer",
        border: hovered ? `2px solid ${theme.colors.violet[2]}` : "",
      }}
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
              bills={bank.assets}
              coins={bank.coinAsset}
            />
          </div>
          <div>
            <BalanceSheetRowHeading
              side="liabilities"
              bills={bank.liabilities}
              coins={bank.coinLiability}
            />
          </div>
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
