import { Box, Card, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import { ChevronRight } from "tabler-icons-react";
import { colors } from "../../../../../../config/colorPalette";

export default function LecturesPage() {
  const { hovered, ref } = useHover();

  return (
    <>
      <div style={{ marginTop: 100 }}>
        <Box ml={50} mr={200}>
          <h1 style={{ color: colors.text }}>Lectures on Money and Banking</h1>
          <Box mt={40}>
            <Text style={{ color: colors.text, letterSpacing: 1 }}>
              This course covers money and banking by using interactive models
              of banking systems. We'll begin by examining the activities of a
              local bank using accounting and balance sheets. Each lecture
              chapter introduces a new concept and gradually builds a
              comprehensive understanding of the global banking system.
            </Text>
            <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
              The lectures will be split into two parts. The first part will
              focus mainly on the banking systems of 19th century New York,
              London, and the Federal Reserve System. The second part will look
              at international banking systems and more complex aspects of
              finance. Prior knowledge of banking is not necessary, so feel free
              to start with any lecture.
            </Text>
          </Box>
        </Box>

        <Link href="/lectures/fundamentals">
          <Card
            ref={ref}
            style={{
              backgroundColor: hovered
                ? colors.background3
                : colors.background1,
              color: colors.text,
              cursor: "pointer",
            }}
          >
            <Box p={25} style={{ display: "flex" }}>
              <Box style={{ flex: 1 }}>
                <Text
                  size="xl"
                  weight="bold"
                  align="right"
                  style={{ letterSpacing: 1, color: colors.text }}
                >
                  START HERE
                </Text>
                <Text
                  size="xl"
                  weight="bold"
                  align="right"
                  style={{ color: colors.textColor }}
                >
                  Fundamentals
                </Text>
              </Box>
              <Box
                style={{
                  padding: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChevronRight color="black" />
              </Box>
            </Box>
          </Card>
        </Link>
      </div>
    </>
  );
}
