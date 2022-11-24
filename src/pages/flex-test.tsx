import { Box, Flex, Text } from "@mantine/core";

export default function FlexTest() {
  return (
    <Box style={{zIndex: 0}}>
      <Box style={{ background: "lightblue", height: "100vh" }}></Box>
      <Box
        style={{ background: "lightred", height: "100vh", zIndex: 2}}
      >
        <h1>Box 2</h1>
      </Box>
      <Box
        style={{
          background: "lightgreen",
          height: "100vh",
          position: "fixed",
          
          zIndex: 1
        }}
      >
        <h1>Hello</h1>
      </Box>
    </Box>
  );
}
