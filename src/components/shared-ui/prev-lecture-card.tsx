import { Box, Card, Text } from "@mantine/core";
import Link from "next/link";
import { colors } from "../../config/colorPalette";
import { usePrevPage } from "../../hooks/usePrevPage";
import { useHover } from "@mantine/hooks";
import { ChevronLeft } from "tabler-icons-react";

export default function NextLectureLink({ prevLecture }) {
  let link = usePrevPage(prevLecture);
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
              style={{ letterSpacing: 1 }}
            >
              PREVIOUS
            </Text>
            <Text size="xl" weight="bold" align="right" color="violet">
              {link.title}
            </Text>
          </Box>
        </Box>
      </Card>
    </Link>
  );
}
