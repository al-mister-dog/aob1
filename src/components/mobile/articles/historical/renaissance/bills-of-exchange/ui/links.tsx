import Link from "next/link";
import { useHover } from "@mantine/hooks";
import { Card, Text, Box } from "@mantine/core";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import { colors } from "../../../../../../../config/colorPalette";

export function PrevLink({ prevPath, prevLinkTitle }) {
  const { hovered, ref } = useHover();
  return (
    <Link href={prevPath}>
      <Card
        ref={ref}
        style={{
          backgroundColor: hovered ? colors.background3 : colors.background1,
          color: colors.text,
          cursor: "pointer",
        }}
      >
        <Box p={25} style={{ display: "flex" }}>
          <Box
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChevronLeft color="black" />
          </Box>
          <Box style={{ flex: 1 }}>
            <Text
              size="xl"
              weight="bold"
              align="left"
              style={{ letterSpacing: 1, color: colors.text }}
            >
              PREVIOUS
            </Text>
            <Text
              size="xl"
              weight="bold"
              align="left"
              style={{ color: colors.textColor }}
            >
              {prevLinkTitle}
            </Text>
          </Box>
        </Box>
      </Card>
    </Link>
  );
}

export function NextLink({ nextPath, nextLinkTitle }) {
  const { hovered, ref } = useHover();
  return (
    <Link href={nextPath}>
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
              style={{ letterSpacing: 1 }}
            >
              NEXT
            </Text>
            <Text size="xl" weight="bold" align="right" color="violet">
              {nextLinkTitle}
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
  );
}
