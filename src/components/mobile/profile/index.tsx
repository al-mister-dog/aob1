import { Box, Tabs } from "@mantine/core";
import About from "./about";
import ArticlesList from "./articles/list";
import AvatarComponent from "./navbar/avatar";

export default function Index({ user }) {
  return (
    <>
      <Box>
        <AvatarComponent user={user} />
        <Box style={{ width: "100%", overflow: "auto" }}>
          <HeaderTabs user={user} />
        </Box>
      </Box>
    </>
  );
}

function HeaderTabs({ user }) {
  return (
    <Tabs mt={25} p={0} color="violet" defaultValue="first">
      <Tabs.List position="center">
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
