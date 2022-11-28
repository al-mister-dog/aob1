import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  SimpleGrid,
  Box,
} from "@mantine/core";
import { data } from "./data";
const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { name: string; data: any }[];
}

export default function FlowsTable() {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.name}</td>
      <td>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SimpleGrid cols={2}>
            <Box>{row.data.Households.sources}</Box>
            <Box> {row.data.Households.uses}</Box>
          </SimpleGrid>
        </Box>
      </td>
      <td>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SimpleGrid cols={2}>
            <Box>{row.data["Non-Financial Corporations"].sources}</Box>
            <Box>{row.data["Non-Financial Corporations"].uses}</Box>
          </SimpleGrid>
        </Box>
      </td>
      <td>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SimpleGrid cols={2}>
            <Box>{row.data["Financial Institutions"].sources}</Box>
            <Box>{row.data["Financial Institutions"].uses}</Box>
          </SimpleGrid>
        </Box>
      </td>
      <td>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SimpleGrid cols={2}>
            <Box>{row.data.Government.sources}</Box>
            <Box>{row.data.Government.uses}</Box>
          </SimpleGrid>
        </Box>
      </td>
      <td>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SimpleGrid cols={2}>
            <Box>{row.data["Saving and Investment"].sources}</Box>
            <Box>{row.data["Saving and Investment"].uses}</Box>
          </SimpleGrid>
        </Box>
      </td>
    </tr>
  ));

  return (
    <ScrollArea
      sx={{ height: 300 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Sectors</th>
            <th>Households</th>
            <th>Non-Financial Corporations</th>
            <th>Financial Institutions</th>
            <th>Government</th>
            <th>Saving and Investment</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
