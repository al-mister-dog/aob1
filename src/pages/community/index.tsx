import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

export default function Index() {
  const { data: session } = useSession();
  return (
    <>
      <Box style={{ minHeight: "100vh" }}>
        <h1>Welcome {session.user.name}</h1>
        <Image
          src={session.user.image}
          alt={session.user.name}
          height={100}
          width={100}
        ></Image>
        <Box>
          <PostForm email={session.user.email} />
        </Box>
      </Box>
    </>
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
    console.log(data);
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
      <p>{JSON.stringify(response)}</p>
    </Box>
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
