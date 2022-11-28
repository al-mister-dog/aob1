import { useState } from "react";
import { useForm } from "@mantine/form";
import axios, { AxiosRequestConfig } from "axios";
import {
  Center,
  Text,
  Avatar,
  Spoiler,
  Button,
  Box,
  Group,
  Textarea,
  TextInput,
} from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import { colors } from "../../../../config/colorPalette";

export default function AvatarComponent({ user }) {
  const [editting, setEditting] = useState(false);
  const [updatedTag, setUpdatedTag] = useState("");
  const [updatedBio, setUpdatedBio] = useState("");

  function handleSuccess(tag, bio) {
    toast.success("Bio Updated", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setUpdatedTag(tag);
    setUpdatedBio(bio);
  }

  function handleFailure() {
    toast.error("There was an error submitting bio. Try again later", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <Box
        mt={70}
        style={{
          height: 70,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Group ml={25}>
          <Avatar src={user.image} radius="xl" size="lg" />
          <Box>
            <h2 style={{ margin: 0, padding: 0, color: colors.text }}>
              {user.name}
            </h2>
            <Text mt={-10} color="dimmed">
              {user.title}
            </Text>
          </Box>
        </Group>
      </Box>
      <Spoiler
        mt={30}
        maxHeight={100}
        showLabel={
          <Text size="sm" color="violet" ml={15}>
            Read More
          </Text>
        }
        hideLabel={
          <Text size="sm" color="violet" ml={15}>
            Hide
          </Text>
        }
        transitionDuration={100}
      >
        <Text
          p={15}
          pb={0}
          size="sm"
          mt={0}
          mb={0}
          color={colors.textColor}
          align="justify"
        >
          {user.bio}
        </Text>
      </Spoiler>
      <Center>
        {!editting && (
          <Button
            mt="xl"
            variant="outline"
            mb="sm"
            color="violet"
            style={{ width: "95%" }}
            onClick={() => setEditting(true)}
          >
            Edit Profile
          </Button>
        )}
      </Center>
      {editting && (
        <ProfileForm
          updatedTag={updatedTag}
          updatedBio={updatedBio}
          tag={user.title}
          bio={user.bio}
          setEditting={setEditting}
          handleFailure={handleFailure}
          handleSuccess={handleSuccess}
        />
      )}
      <ToastContainer />
    </>
  );
}

function ProfileForm({
  updatedTag,
  updatedBio,
  tag,
  bio,
  setEditting,
  handleSuccess,
  handleFailure,
}) {
  const form = useForm({
    initialValues: {
      tag: updatedTag || tag,
      bio: updatedBio || bio,
    },
  });
  async function onSubmitDetails(values) {
    const config: AxiosRequestConfig = {
      url: "/api/user/tag-bio",
      data: values,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);

    if (res.status === 201) {
      setEditting(false);
      handleSuccess(values.tag, values.bio);
    } else {
      handleFailure();
    }
  }
  return (
    <Box mx="auto" style={{ width: "90%" }} mb={5}>
      <form onSubmit={form.onSubmit((values) => onSubmitDetails(values))}>
        <TextInput
          label="Tag"
          placeholder="Tag Line"
          {...form.getInputProps("tag")}
        />
        <Textarea
          minRows={2}
          maxRows={4}
          label="Bio"
          placeholder="Bio"
          {...form.getInputProps("bio")}
        />
        <Group position="left" mt="md">
          <Button size="xs" color="violet" type="submit">
            Save
          </Button>
          <Button
            size="xs"
            color="violet"
            variant="default"
            onClick={() => setEditting(false)}
          >
            Cancel
          </Button>
        </Group>
      </form>
    </Box>
  );
}
