import { Box, Center, Grid, Text } from "@mantine/core";
import Card from "./card";

export default function Layout({
  FlorencePlayers,
  LyonsPlayers,
  selectPlayer,
}) {
  const allPlayers = [...FlorencePlayers, ...LyonsPlayers];

  return (
    <>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
        }}
      >
        {FlorencePlayers.map((bank) => (
          <div key={bank.id} style={{ marginBottom: "10px" }}>
            <Card bank={bank} selectPlayer={selectPlayer} />
          </div>
        ))}
      </Box>

      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
        }}
      >
        {LyonsPlayers.map((bank) => (
          <div key={bank.id} style={{ marginBottom: "10px" }}>
            <Card bank={bank} selectPlayer={selectPlayer} />
          </div>
        ))}
      </Box>
    </>
  );
}
