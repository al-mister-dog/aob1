import { Box, Skeleton } from "@mantine/core";

export default function Loader() {
  return (
    <Box style={{ height: "100vh" }}>
      <Skeleton height={50} circle />
      <Skeleton height={8} />
      <Skeleton height={8} />
      <Skeleton height={8} width="70%" />
    </Box>
  );
}
