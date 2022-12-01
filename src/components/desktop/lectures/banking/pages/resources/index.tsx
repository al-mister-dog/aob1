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
              Here you will learn all about money and banking, using interactive
              models of banking systems. We will start with looking at the
              activities of a local bank through the lens of accounting and
              balance sheets. With each lecture chapter we introduce a new
              feature and build up a bigger picture of the global banking system
              as a whole.
            </Text>
            <Text mt={25} style={{ color: colors.text, letterSpacing: 1 }}>
              The lectures will be divided into two modules. The first module
              will stay relatively local, with a few forrays into the banking
              systems of the 19th century New York, London as well as the
              Federal Reserve System. The second module will look at the
              international system and more esoteric features of finance. These
              lectures assume zero familiarity with banking terminology and
              concepts so feel free to move to any chapter of the lectures.
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
