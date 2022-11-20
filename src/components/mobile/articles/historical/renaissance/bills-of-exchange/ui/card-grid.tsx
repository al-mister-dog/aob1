import { Box, Grid, Text } from "@mantine/core";
import Card from "./card";

export default function Layout({
  florencePlayers,
  lyonsPlayers,
  selectPlayer,
}) {
  const allPlayers = [...florencePlayers, ...lyonsPlayers];

  return (
    <>
      {/* <Grid gutter={2} grow>
        <Grid.Col span={1}>
          <div>
            {florencePlayers.map((bank) => (
              <div key={bank.id} style={{ marginBottom: "10px" }}>
                <Card bank={bank} selectPlayer={selectPlayer} />
              </div>
            ))}
          </div>
        </Grid.Col>
        <Grid.Col span={1}>
          <div>
            {lyonsPlayers.map((bank) => (
              <div key={bank.id} style={{ marginBottom: "10px" }}>
                <Card bank={bank} selectPlayer={selectPlayer} />
              </div>
            ))}
          </div>
        </Grid.Col>
      </Grid> */}
      <Text mt={10}>Florence</Text>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
        }}
      >
        {florencePlayers.map((bank) => (
          <div key={bank.id} style={{ marginBottom: "10px" }}>
            <Card bank={bank} selectPlayer={selectPlayer} />
          </div>
        ))}
      </Box>
      <Text mt={10}>Lyons</Text>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          overflow: "auto",
        }}
      >
        {lyonsPlayers.map((bank) => (
          <div key={bank.id} style={{ marginBottom: "10px" }}>
            <Card bank={bank} selectPlayer={selectPlayer} />
          </div>
        ))}
      </Box>
    </>
  );
}
