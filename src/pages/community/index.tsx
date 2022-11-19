import {
  TextInput,
  Text,
  Button,
  Group,
  Box,
  Title,
  Card,
  Tabs,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSession, getSession } from "next-auth/react";

import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { colors } from "../../config/colorPalette";
import Navbar from "../../components/desktop/profile/navbar/navbar";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import About from "../../components/desktop/profile/about";

export default function Index(props) {
  // const { data: session } = useSession();
  const { user } = props;

  return (
    <>
      <Box style={{ minHeight: "100vh", display: "flex" }}>
        <Navbar user={user} />
        <Box style={{ width: "100%" }}>
          <Box ml={50} mt={100} style={{ width: "60%" }}>
            <h1 style={{ color: colors.textColor }}>{user.name}</h1>
            <HeaderTabs user={user} />
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
        <Box mt={25}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link href="community/new-article">
              <Button variant="outline" color="violet">
                Write New Article
              </Button>
            </Link>
          </Box>
          <Box>
            <Text color="dimmed" mb={10}>
              3 Days ago
            </Text>
            <h3
              style={{ margin: 0, marginBottom: 10, color: colors.textColor }}
            >
              Clearing House Loans
            </h3>
            <p style={{ color: colors.textColor }}>
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
            <h3
              style={{ margin: 0, marginBottom: 10, color: colors.textColor }}
            >
              Fed Funds Effective Rate
            </h3>
            <p style={{ color: colors.textColor }}>
              If we averaged all the different fed funds loans traded between
              banks we would get the Effective Federal Funds Rate (EFFR). The
              precise rate is determined by finding the volume-weighted median
              rate of all fed funds loans. . .
            </p>
          </Box>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        <About user={user} />
      </Tabs.Panel>
    </Tabs>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/registration/signin",
      },
    };
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (user) {
    return {
      props: {
        session,
        user,
      },
    };
  }
}
