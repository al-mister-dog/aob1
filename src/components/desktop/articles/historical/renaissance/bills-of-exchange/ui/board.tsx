import { Box, Grid, Group, Header, useMantineTheme } from "@mantine/core";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks";
import { colors } from "../../../../../../../config/colorPalette";
import {
  reset,
  selectBankers,
  selectTraders,
} from "../../../../../../../features/renaissance/renaissanceSlice";
import RefreshButton from "../../../../../../shared-ui/components/RefreshButton";
import BankDetail from "./bank-detail";
import CardGrid from "./card-grid";

export default function Board({ FlorencePlayers, LyonsPlayers }) {
  const theme = useMantineTheme();
  const dispatch = useAppDispatch();
  const { me, Salviati, Federigo, Piero } = useAppSelector(selectTraders);
  const { you, Tommaso } = useAppSelector(selectBankers);

  const [selected, setSelected] = useState<string>("me");

  function selectPlayer(player: any) {
    setSelected(player.id);
  }

  function handleRefresh() {
    dispatch(reset());
  }
  return (
    <Box>
      <Header
        height={60}
        px="md"
        style={{ backgroundColor: colors.background1 }}
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <RefreshButton onClick={handleRefresh} />
        </Group>
      </Header>

      <Grid grow p={10} >
        <Grid.Col span={5}>
          <CardGrid
            FlorencePlayers={FlorencePlayers}
            LyonsPlayers={LyonsPlayers}
            selectPlayer={selectPlayer}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          {selected === "me" && <BankDetail player={me} />}
          {selected === "you" && <BankDetail player={you} />}
          {selected === "Salviati" && <BankDetail player={Salviati} />}
          {selected === "Tommaso" && <BankDetail player={Tommaso} />}
          {selected === "Piero" && <BankDetail player={Piero} />}
          {selected === "Federigo" && <BankDetail player={Federigo} />}
        </Grid.Col>
      </Grid>
    </Box>
  );
}
