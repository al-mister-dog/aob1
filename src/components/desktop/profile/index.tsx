import { Box, Tabs } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import Navbar from "./navbar/navbar";
import About from "./about";
import ArticlesList from "./articles/list-preview";

export default function Index({ user }) {
  return (
    <>
      <Box style={{ minHeight: "100vh", display: "flex" }}>
        <Navbar user={user} />
        <Box style={{ width: "100%" }}>
          <Box ml={50} mt={100} style={{ maxWidth: "700px" }}>
            <h1 style={{ color: colors.textColor }}>{user.name}</h1>
            <HeaderTabs user={user} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

function HeaderTabs({ user }) {
  return (
    <Tabs
      mt={25}
      p={0}
      styles={{ tabLabel: { marginLeft: -25, padding: 10 } }}
      color="violet"
      defaultValue="first"
    >
      <Tabs.List>
        <Tabs.Tab value="first">Articles</Tabs.Tab>
        <Tabs.Tab value="second">About</Tabs.Tab>
        <Tabs.Tab value="third">Discussion</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        <ArticlesList user={user} />
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        <About user={user} />
      </Tabs.Panel>
    </Tabs>
  );
}
