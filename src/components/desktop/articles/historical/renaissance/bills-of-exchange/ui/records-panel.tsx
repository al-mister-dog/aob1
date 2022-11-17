import uuid from "react-uuid";
import { Box, Text, useMantineTheme } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  newest: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  oldest: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function RecordList({ player }) {
  return (
    <Box>
      {player.records.map((record: string, index: number) => {
        return (
          <div
            key={uuid()}
            style={{
              padding: "3px",
              backgroundColor: `${index % 2 === 0 ? "rgba(0,0,0,0.02)" : ""}`,
            }}
          >
            <Text size="xs">{record}</Text>
          </div>
        );
      })}
    </Box>
  );
}
