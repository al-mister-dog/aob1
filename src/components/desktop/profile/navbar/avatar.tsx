import { useState } from "react";
import { useForm } from "@mantine/form";
import { fetcher } from "../../../../lib/fetcher";
import useSWR from "swr";
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
  Loader,
} from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import { colors } from "../../../../config/colorPalette";
import SessionContainer from "../../../auth/registration/SessionContainer";

export default function AvatarComponent({ user, updatedBio, setUpdatedBio }) {
  const [editting, setEditting] = useState(false);
  const [updatedTag, setUpdatedTag] = useState("");
  const { data, error } = useSWR(
    `/api/user/profile/?email=${user.email}`,
    fetcher
  );

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
      <Center>
        <Avatar src={user.image} alt={user.name} size={200} radius={200} />
      </Center>
      <Center>
        <h2 style={{ marginBottom: 0, color: colors.textColor }}>
          {user.name}
        </h2>
      </Center>
      <Center>
        <Text color="dimmed">
          {updatedTag ? updatedTag : data ? data.title : " "}
        </Text>
      </Center>
      <Center>
        <Spoiler
          maxHeight={120}
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
          
          {updatedBio ? (
            <Text
              p={15}
              pb={0}
              size="sm"
              mt={0}
              mb={0}
              color={colors.textColor}
              align="justify"
            >
              {updatedBio}
            </Text>
          ) : data ? (
            <Text
              p={15}
              pb={0}
              size="sm"
              mt={0}
              mb={0}
              color={colors.textColor}
              align="justify"
            >
              {data.bio}
            </Text>
          ) : (
            <Loader color="violet" size="xs" />
          )}

          {/* <Text
            p={15}
            pb={0}
            size="sm"
            mt={0}
            mb={0}
            color={colors.textColor}
            align="justify"
          >
            {updatedBio ? updatedBio : data ? data.bio : " "}
          </Text> */}
        </Spoiler>
      </Center>
      <EditProfileButton
        user={user}
        updatedTag={updatedTag}
        updatedBio={updatedBio}
        editting={editting}
        setEditting={setEditting}
        handleFailure={handleFailure}
        handleSuccess={handleSuccess}
      />
      <ToastContainer />
    </>
  );
}

function EditProfileButton({
  user,
  updatedTag,
  updatedBio,
  editting,
  setEditting,
  handleFailure,
  handleSuccess,
}) {
  return (
    <SessionContainer user={user}>
      <>
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
      </>
    </SessionContainer>
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
