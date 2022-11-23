import { Box, Card, createStyles, Flex } from "@mantine/core";
import { Text } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import NextLectureCard from "../../shared-ui/next-lecture-card";
import PrevLectureCard from "../../shared-ui/prev-lecture-card";
import Main from "../../shared-ui/SpoilerText";
import Title from "./title";

export default function Introduction({
  slug,
  title,
  text,
  assignment,
  nextLecture,
}) {
  return (
    <>
      <div
        style={{
          padding: `0px 200px 0px 50px`,
          marginTop: "50px",
        }}
      >
        <Title slug={slug} title={title} />

        <div style={{ marginTop: "25px" }}>
          <Main text={text} />
        </div>
      </div>

      <div style={{ marginTop: "25px" }}>
        <Sources assignment={assignment} />
      </div>
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

function Sources({ assignment }) {
  return (
    <Card
      withBorder
      style={{
        width: "92%",
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
              <Text key={i}>{src}</Text>
            ))}
        </>
      ) : (
        <p style={{ color: colors.text, fontSize: "16px", letterSpacing: 1 }}>
          {assignment}
        </p>
      )}
    </Card>
  );
}
