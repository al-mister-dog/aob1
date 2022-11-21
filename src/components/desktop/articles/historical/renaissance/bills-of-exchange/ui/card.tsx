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
import { cityColor } from "./utils/city-color";

export default function CardUI({ bank, selectPlayer }) {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <LectureCard
      cardKey={bank.id}
      height="9.75rem"
      hoverBorder={`2px solid ${cityColor(bank, 2)}`}
      onClick={() => selectPlayer(bank)}
    >
      <Card.Section style={{ padding: "3px", cursor: "pointer" }}>
        <Center>
          <h4 style={{ color: cityColor(bank, 9), padding: 0, margin: 0 }}>
            {bank.id}: {bank.city}
          </h4>
        </Center>
      </Card.Section>
      <Card.Section>
        <SimpleGrid
          cols={2}
          sx={{
            borderBottom: `1px solid ${cityColor(bank, 2)}`,
            height: "1.25rem",
          }}
        >
          <Text size="xs" align="center" color={`${cityColor(bank, 9)}`}>
            Assets
          </Text>
          <Text size="xs" align="center" color={`${cityColor(bank, 9)}`}>
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
              borderRight: `1px solid ${cityColor(bank, 2)}`,
            }}
          >
            <BalanceSheetRowHeading
              side="assets"
              color={cityColor(bank, 9)}
              bills={bank.assets}
              coins={bank.coinAsset}
            />
          </div>
          <div>
            <BalanceSheetRowHeading
              side="liabilities"
              color={cityColor(bank, 9)}
              bills={bank.liabilities}
              coins={bank.coinLiability}
            />
          </div>
        </SimpleGrid>
      </Card.Section>
    </LectureCard>
  );
}
