import { Card, Text, SimpleGrid, Box, Flex } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import NextLectureCard from "../../shared-ui/next-lecture-card";
import PrevLectureCard from "../../shared-ui/prev-lecture-card";

export default function Sources({ assignment, nextLecture }) {
  return (
    <>
      <Card
        
        withBorder
        style={{
          margin: "auto",
          backgroundColor: colors.background1,
        }}
      >
        {assignment.slice(0, 7) === "Sources" ? (
          <>
            <h2
              style={{
                margin: 0,
                padding: 0,
                fontWeight: "lighter",
                letterSpacing: 1,
              }}
            >
              Sources
            </h2>
            {assignment
              .split(":")
              .slice(1)
              .map((src, i) => (
                <Text key={i} size="lg">
                  {src}
                </Text>
              ))}
          </>
        ) : (
          <p style={{ color: colors.text, fontSize: "16px", letterSpacing: 1 }}>
            {assignment}
          </p>
        )}
      </Card>

      <Flex
        mt={50}
        direction={{ base: "column", sm: "row" }}
        justify={{ base: "center", sm: "space-between" }}
        align={{ base: "center", sm: "space-between" }}
      >
        <Box
          style={{
            marginRight: "auto",
          }}
        >
          <PrevLectureCard prevLecture={nextLecture} />
        </Box>
        <Box
          style={{
            marginLeft: "auto",
          }}
        >
          <NextLectureCard nextLecture={nextLecture} />
        </Box>
      </Flex>
    </>
  );
}
