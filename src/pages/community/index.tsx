import {
  TextInput,
  Container,
  Text,
  Button,
  Group,
  Box,
  Title,
  Card,
  Avatar,
  Center,
  Header,
  Tabs,
  createStyles,
  useMantineTheme,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { colors } from "../../config/colorPalette";
import Navbar from "../../components/desktop/profile/navbar";

export default function Index() {
  const { data: session } = useSession();

  return (
    <>
      <Box style={{ minHeight: "100vh", display: "flex" }}>
        <Navbar user={session.user} />
        <Box style={{ width: "100%", height: "100vh", overflow: "auto" }}>
          <Box ml={50} mt={100} style={{ width: "60%" }}>
            <h1>{session.user.name}</h1>
            <HeaderTabs />
          </Box>
          <MyArticles email={session.user.email} />
          <PostForm email={session.user.email} />
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
            <Title size="sm">{article.title}</Title>
            <p>{article.body}</p>
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

function HeaderTabs() {
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
        <Box mt={25}>
          <Box>
            <Text color="dimmed" mb={10}>
              3 Days ago
            </Text>
            <h3 style={{ margin: 0, marginBottom: 10 }}>
              Clearing House Loans
            </h3>
            <p>
              Clearinghouse loan certificates are like banknotes, but they're
              being issued against member loans rather than the special 2%
              government bonds. Before 1907, it wasn't clear that they were
              legal. Because a loan taken by a debtor bank accrued 6% interest,
              so did the Clearinghouse loan certificates. . .
            </p>
          </Box>
          <Divider mt={50} />
          <Box mt={50}>
            <Text color="dimmed" mb={10}>
              6 Days ago
            </Text>
            <h3 style={{ margin: 0, marginBottom: 10 }}>
              Fed Funds Effective Rate
            </h3>
            <p>
              If we averaged all the different fed funds loans traded between
              banks we would get the Effective Federal Funds Rate (EFFR). The
              precise rate is determined by finding the volume-weighted median
              rate of all fed funds loans. . .
            </p>
          </Box>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        <Box mt={25}>
          <p>
            I love coding and learning new technologies. My passion is creating
            educational software that make complex topics accessible to as many
            people as possible. As a self taught developer since 2020 I've
            become proficient using languages such as Typescript, Javascript,
            Python and SQL, as well as frameworks like React, Next-JS, Redux,
            Node/Express, Django and Vue. For most of my career I have been a
            professional musician, and have toured internationally playing folk,
            jazz and other styles. In my spare time I enjoy reading and sports.
          </p>
        </Box>
      </Tabs.Panel>
    </Tabs>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/registration/signin",
      },
    };
  }
  return {
    props: { session },
  };
}
