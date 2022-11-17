import {
  ActionIcon,
  Box,
  Grid,
  Group,
  Header,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { RefreshDot } from "tabler-icons-react";
import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks";
import { colors } from "../../../../../../../config/colorPalette";
import {
  reset,
  selectBankers,
  selectTraders,
} from "../../../../../../../features/renaissance/renaissanceSlice";
import BankDetail from "./bank-detail";
import CardGrid from "./card-grid";

export default function Board({ florencePlayers, lyonsPlayers }) {
  const theme = useMantineTheme();
  const dispatch = useAppDispatch();
  const { me, salviati, federigo, piero } = useAppSelector(selectTraders);
  const { you, tomasso } = useAppSelector(selectBankers);

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
          <Tooltip color="violet" label="Reset Balancesheets" position="right">
            <ActionIcon size="lg" onClick={handleRefresh}>
              <RefreshDot size={40} color={`${theme.colors.violet[9]}`} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Header>

      <Grid grow pt={10} style={{ background: colors.background3 }}>
        <Grid.Col span={4}>
          <CardGrid
            florencePlayers={florencePlayers}
            lyonsPlayers={lyonsPlayers}
            selectPlayer={selectPlayer}
          />
        </Grid.Col>
        <Grid.Col span={1}>
          {selected === "me" && <BankDetail player={me} />}
          {selected === "you" && <BankDetail player={you} />}
          {selected === "salviati" && <BankDetail player={salviati} />}
          {selected === "tomasso" && <BankDetail player={tomasso} />}
          {selected === "piero" && <BankDetail player={piero} />}
          {selected === "federigo" && <BankDetail player={federigo} />}
        </Grid.Col>
      </Grid>
    </Box>
  );
}
