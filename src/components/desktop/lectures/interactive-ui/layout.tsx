import { createStyles, Grid } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { selectActions } from "../../../../features/actions/actionsSlice";

import CardGrid from "./cards/card/card-grid";
import BankDetail from "./bank-detail/panel";
import { CardInfo } from "./types";
import Charts from "./charts/charts";
import Settings from "./toolbar/display-settings/container";
import { selectBanks } from "../../../../features/banks/banksSlice";
import { Bank } from "../../../../domain/structures/types";
import { Balancesheets } from "../../../../domain/analytics/balancesheets-beta";
import Toolbar from "./toolbar/bank-settings/container";

interface Colors {
  [index: string]: any;
}

export default function LayoutDesktop() {
  const { currentLectureId } = useAppSelector(selectActions);
  const { banks } = useAppSelector(selectBanks);
  const colors: Colors = {
    customer: "grape",
    bank: "indigo",
    centralbank: "cyan",
    clearinghouse: "cyan",
  };

  function getCardInfo(bank: Bank): CardInfo {
    const cardInfo = { ...bank };

    const balanceSheet = Balancesheets.get(bank.id);
    const color = colors[`${bank.type}`] as keyof Colors;
    return { cardInfo, balanceSheet, color };
  }

  const banksArray: CardInfo[] = Object.keys(banks)
    .map((bank) => banks[bank])
    .map((bank) => getCardInfo(bank));
  const [bankDetail, setBankDetail] = useState(banksArray[0]);

  useEffect(() => {
    setBankDetail(banksArray[0]);
  }, [currentLectureId]);

  const handleSetBankDetail = useCallback((bank: CardInfo) => {
    setBankDetail(bank);
  }, []);
  return (
    <>
      <Grid  grow p={10}>
        <Grid.Col span={5}>
          <CardGrid
            group={banksArray}
            handleSetBankDetail={handleSetBankDetail}
          />
          <Charts />
        </Grid.Col>
        <Grid.Col span={1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "64.5rem",
            }}
          >
            <BankDetail key={bankDetail.cardInfo.id} bank={bankDetail} />
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}

import {
  Container,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = 300;

export function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
