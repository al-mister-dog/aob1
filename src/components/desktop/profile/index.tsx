import {
  TextInput,
  Button,
  Group,
  Box,
  Text,
  Card,
  Tabs,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import Navbar from "./navbar/navbar";
import { colors } from "../../../config/colorPalette";
import { fetcher } from "../../../lib/fetcher";
import About from "./about";
import ArticlesList from "./articles/list";

export default function Index({ user }) {
  return (
    <>
      <Box style={{ minHeight: "100vh", display: "flex" }}>
        <Navbar user={user} />
        <Box style={{ width: "100%" }}>
          <Box ml={50} mt={100} style={{ maxWidth: "700px" }}>
            <h1 style={{ color: colors.textColor }}>{user.name}</h1>
            {/* <HeaderTabs user={user} /> */}
            <MyArticles email={user.email} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

function MyArticles({ email }) {
  const { data, error } = useSWR(`/api/article/?email=${email}`, fetcher);

  if (!data) {
    return <>...loading</>;
  }
  if (error) {
    return <>error</>;
  }
  return (
    <Card
      shadow="sm"
      style={{
        backgroundColor: colors.background2,
        cursor: "pointer",
      }}
    >
      <h2>Articles</h2>

      {data.map((article) => {
        return (
          <Box key={article.id}>
            <Box>
              <Text color="dimmed" mb={10}>
                {article.createdAt}
              </Text>
              <h3
                style={{ margin: 0, marginBottom: 10, color: colors.textColor }}
              >
                {article.title}
              </h3>
              <p style={{ color: colors.textColor }}>{article.preview}</p>
            </Box>
            <Divider mt={50} />
          </Box>
        );
      })}
    </Card>
  );
}
function PostForm({ email }) {
  const [response, setResponse] = useState("");
  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },

    validate: {
      title: (value) => (value.length > 1 ? null : "Invalid title"),
      body: (value) => (value.length > 1 ? null : "Invalid title"),
    },
  });

  async function submitArticle(values) {
    const { title, body } = values;
    const { data } = await axios.post("/api/article", {
      title,
      body,
      email,
    });
    setResponse(JSON.stringify(data));
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => submitArticle(values))}>
        <TextInput
          withAsterisk
          label="title"
          placeholder="title"
          {...form.getInputProps("title")}
        />
        <TextInput
          withAsterisk
          label="body"
          placeholder="body"
          {...form.getInputProps("body")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <p>{response}</p>
    </Box>
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
        <ArticlesList />
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        <About user={user} />
      </Tabs.Panel>
    </Tabs>
  );
}
