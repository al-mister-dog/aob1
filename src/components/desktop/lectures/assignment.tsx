import { Box, Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

export default function Assignment({ assignment }) {
  return (
    <>
      <h1
        style={{
          padding: 0,
          margin: 0,
          color: colors.text,
          letterSpacing: 1,
        }}
      >
        Assignment
      </h1>

      <Text
        size="sm"
        weight="bold"
        style={{
          paddingBottom: 0,
          letterSpacing: "1px",
          color: colors.text,
        }}
      >
        {assignment}
      </Text>
    </>
  );
}
