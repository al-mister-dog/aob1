import { Box, Skeleton } from "@mantine/core";

export default function Loader() {
  return (
    <Box style={{ height: "100vh" }}>
      <Skeleton height={50} circle />
      <Skeleton mt={15} height={8} />
      <Skeleton mt={10} height={8} />
      <Skeleton mt={10} height={8} />
      <Skeleton mt={10} height={8} />
      <Skeleton mt={10} height={8} width="70%" />

      <Skeleton mt={50} height={50} circle />
      <Skeleton mt={15} height={8} />
      <Skeleton mt={10} height={8} />
      <Skeleton mt={10} height={8} />
      <Skeleton mt={10} height={8} />
      <Skeleton mt={10} height={8} width="70%" />
    </Box>
  );
}
