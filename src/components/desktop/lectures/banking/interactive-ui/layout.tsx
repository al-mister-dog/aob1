import { Grid } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { selectActions } from "../../../../../features/actions/actionsSlice";

import CardGrid from "./cards/card/card-grid";
import BankDetail from "./bank-detail/panel";
import { CardInfo } from "./types";
import Charts from "./charts/charts";

import { selectBanks } from "../../../../../features/banks/banksSlice";
import { Bank } from "../../../../../domain/structures/types";
import { Balancesheets } from "../../../../../domain/analytics/balancesheets-beta";
import Analytics from "./analytics/panel";

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
      <Grid grow p={10}>
        <Grid.Col span={5}>
          <CardGrid
            group={banksArray}
            handleSetBankDetail={handleSetBankDetail}
          />
          
          <Charts />
        </Grid.Col>
        <Grid.Col span={1}>
          <div style={{ height: "100%" }}>
            <BankDetail key={bankDetail.cardInfo.id} bank={bankDetail} />
            {/* <Analytics /> */}
          </div>
        </Grid.Col>
      </Grid>
    </>
  );
}
