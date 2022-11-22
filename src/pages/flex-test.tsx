import { Box, Flex, Text } from "@mantine/core";

export default function FlexTest() {
  return (
    <Flex
      mt={200}
      direction={{ base: "column", sm: "row" }}
      justify={{ base: "center", sm: "space-between" }}
      align={{ base: "center", sm: "space-between" }}
      style={{ backgroundColor: "gray" }}
    >
      <Box
        style={{
          marginRight: "auto",
        }}
      >
        <Text align="left">Left</Text>
      </Box>
      <Box
        style={{
          marginLeft: "auto",
        }}
      >
        <Text align="right">Right</Text>
      </Box>
    </Flex>
  );
}
