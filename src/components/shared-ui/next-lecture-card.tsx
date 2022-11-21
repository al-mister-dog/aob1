import { Box, Card, Text, useMantineTheme } from "@mantine/core";
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
        mb={150}
        style={{
          backgroundColor: hovered ? colors.background3 : colors.background1,
          color: colors.text,
          cursor: "pointer",
        }}
      >
        <Box p={25} style={{ display: "flex" }}>
          <Box style={{ flex: 1 }}>
            <Text size="xl" weight="bold" align="right" style={{letterSpacing: 1}}>
              NEXT
            </Text>
            <Text size="xl" weight="bold" align="right" color="violet">
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
