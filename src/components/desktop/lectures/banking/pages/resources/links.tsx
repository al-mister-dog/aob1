import { Flex, Box } from "@mantine/core";

import NextLectureCard from "../../../../../shared-ui/next-lecture-card";
import PrevLectureCard from "../../../../../shared-ui/prev-lecture-card";

export default function Links({ lecture }) {
  return (
    <Flex
      mt={100}
      direction={{ base: "column", sm: "row" }}
      justify={{ base: "center", sm: "space-between" }}
      align={{ base: "center", sm: "space-between" }}
    >
      <Box
        style={{
          marginRight: "auto",
        }}
      >
        <PrevLectureCard prevLecture={lecture} />
      </Box>
      <Box
        style={{
          marginLeft: "auto",
        }}
      >
        <NextLectureCard nextLecture={lecture} />
      </Box>
    </Flex>
  );
}
