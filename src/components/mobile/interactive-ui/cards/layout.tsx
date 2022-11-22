import { Box, Group } from "@mantine/core";
import { splitArray } from "../../../helpers";
import { CardInfo } from "../types";
import Card from "./card/card";

export default function LayoutMobile({
  banksArray,
}: {
  banksArray: CardInfo[];
}) {
  const [array1, array2] = splitArray(banksArray);
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
        {array1.map((bank, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <Card key={bank.cardInfo.id} bank={bank} />
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
        {array2.map((bank, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <Card key={bank.cardInfo.id} bank={bank} />
          </div>
        ))}
      </Box>
    </>
  );
}
