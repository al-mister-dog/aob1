import { Box, Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

export default function Assignment({ assignment }) {
  return (
    <div>
      <h2
        style={{
          letterSpacing: 1,
          textAlign: "center",
          color: colors.text,
          margin: 0,
        }}
      >
        Assignment
      </h2>

      <Box mt={10} pl={25} pr={25}>
        <Text
          size="xs"
          weight="bold"
          style={{
            paddingBottom: 0,
            letterSpacing: "1px",
            color: colors.text,
          }}
        >
          {assignment}
        </Text>
      </Box>
    </div>
  );
}
