import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "@mantine/form";

import { Box, Button, Group, Text, Textarea } from "@mantine/core";
import axios, { AxiosRequestConfig } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function About({ user }) {
  const { bio } = user;
  const router: NextRouter = useRouter();
  const [editting, setEditting] = useState(false);
  const [updatedBio, setUpdatedBio] = useState("");

  function onClickEdit() {
    setEditting(true);
  }

  function handleSuccess(bio) {
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
    setUpdatedBio(bio);
  }

  function handleFailure() {
    toast.error("There was an error submitting bio. Try again later", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <Box mt={25}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!bio && <Text>This section is currently empty. . .</Text>}
        <Button color="violet" variant="outline" onClick={onClickEdit}>
          {bio ? "Edit Bio" : "Add Bio"}
        </Button>
      </Box>
      <Box mt={25}>
        {editting ? (
          <ProfileForm
            router={router}
            setEditting={setEditting}
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        ) : (
          <p>{updatedBio || bio}</p>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
}

type ProfileFormProps = {
  router: NextRouter;
  setEditting: (v: boolean) => void;
  handleSuccess: (v: string) => void;
  handleFailure: () => void;
};

function ProfileForm({
  router,
  setEditting,
  handleSuccess,
  handleFailure,
}: ProfileFormProps) {
  const form = useForm({
    initialValues: {
      bio: "",
    },

    validate: {
      bio: (value) =>
        value.length > 5 ? null : "Bios need to be at least 5 characters long!",
    },
  });

  async function onEditBio(values) {
    const config: AxiosRequestConfig = {
      url: "/api/user/bio",
      data: values,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios(config);

    if (res.status === 201) {
      setEditting(false);
      handleSuccess(values.bio);
    } else {
      handleFailure();
    }
  }
  return (
    <form onSubmit={form.onSubmit((values) => onEditBio(values))}>
      <Textarea minRows={6} placeholder="Bio" {...form.getInputProps("bio")} />
      <Group position="right" mt="md">
        <Button
          color="violet"
          type="submit"
          disabled={form.values.bio.length < 5}
        >
          Submit
        </Button>
        <Button color="violet" onClick={() => setEditting(false)}>
          Cancel
        </Button>
      </Group>
    </form>
  );
}

/**
 *
 * current bio is on page
 * user edits bio
 * submit post request
 * page does not reload...
 */
