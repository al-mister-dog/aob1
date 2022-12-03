import { Box, Card, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import { ChevronRight } from "tabler-icons-react";
import { colors } from "../../../config/colorPalette";
import { Paragraph } from "../../shared-ui/texts/Paragraph";

export default function LecturesPage() {
  const { hovered, ref } = useHover();

  return (
    <>
      <Box style={{ marginTop: 155 }}>
        <h1
          style={{
            color: colors.text,
            textAlign: "center",
            letterSpacing: 1.5,
            padding: 0,
            margin: 0,
            marginTop: 5,
          }}
        >
          Lectures on Money and Banking
        </h1>

        <Box mt={25} ml={25} mr={25}>
          <Paragraph>
            This course covers money and banking by using interactive models of
            banking systems. We'll begin by examining the activities of a local
            bank using accounting and balance sheets. Each lecture chapter
            introduces a new concept and gradually builds a comprehensive
            understanding of the global banking system.
          </Paragraph>
          <Paragraph>
            The lectures will be split into two parts. The first part will focus
            mainly on the banking systems of 19th century New York, London, and
            the Federal Reserve System. The second part will look at
            international banking systems and more complex aspects of finance.
            Prior knowledge of banking is not necessary, so feel free to start
            with any lecture.
          </Paragraph>
        </Box>
      </Box>

      <Link href="/lectures/fundamentals">
        <Card
          ref={ref}
          style={{
            backgroundColor: hovered ? colors.background3 : colors.background1,
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
    </>
  );
}
