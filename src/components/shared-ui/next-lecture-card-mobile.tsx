import { Box, Card, Text } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../config/colorPalette";
import { useNextPage } from "../../hooks/useNextPage";
import { useHover } from "@mantine/hooks";
import { ChevronRight } from "tabler-icons-react";

export default function NextLectureLink({ nextLecture }) {
  let link = useNextPage(nextLecture);
  const { hovered, ref } = useHover();

  return (
    <Link href={`/lectures${link.path}`}>
      <Card
        ref={ref}
        style={{
          backgroundColor: hovered ? colors.background3 : colors.background1,
          color: colors.text,
          cursor: "pointer",
        }}
      >
        <Box style={{ display: "flex" }}>
          <Box style={{ flex: 1 }}>
            <Text
              weight="bold"
              align="right"
              style={{ letterSpacing: 1, color: colors.text }}
            >
              NEXT
            </Text>
            <Text
              weight="bold"
              align="right"
              style={{ color: colors.textColor }}
            >
              {link.title}
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
