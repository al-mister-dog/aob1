import { Card, Text, SimpleGrid, Box } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import NextLectureCard from "../../shared-ui/next-lecture-card";

export default function Sources({ assignment, nextLecture }) {
  return (
    <>
      <Box p={10} mt={100}>
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
      </Box>

      <NextLectureCard nextLecture={nextLecture} />
    </>
  );
}
