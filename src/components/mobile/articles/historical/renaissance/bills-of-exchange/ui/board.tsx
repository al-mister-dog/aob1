import { Box, Drawer, Group, useMantineTheme } from "@mantine/core";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks";

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
  const [opened, setOpened] = useState(false);

  function selectPlayer(player: any) {
    setSelected(player.id);
    setOpened(true);
  }

  function handleRefresh() {
    dispatch(reset());
  }
  return (
    <>
      <Box id="board-toolbar" mt={25}>
        <Group
          position="apart"
          style={{
            borderRadius: 5,
            margin: "10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <RefreshButton onClick={handleRefresh} />
          </Box>
        </Group>
      </Box>

      <CardGrid
        FlorencePlayers={FlorencePlayers}
        LyonsPlayers={LyonsPlayers}
        selectPlayer={selectPlayer}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
      >
        {selected === "me" && <BankDetail player={me} setOpened={setOpened} />}
        {selected === "you" && (
          <BankDetail player={you} setOpened={setOpened} />
        )}
        {selected === "Salviati" && (
          <BankDetail player={Salviati} setOpened={setOpened} />
        )}
        {selected === "Tommaso" && (
          <BankDetail player={Tommaso} setOpened={setOpened} />
        )}
        {selected === "Piero" && (
          <BankDetail player={Piero} setOpened={setOpened} />
        )}
        {selected === "Federigo" && (
          <BankDetail player={Federigo} setOpened={setOpened} />
        )}
      </Drawer>
    </>
  );
}
