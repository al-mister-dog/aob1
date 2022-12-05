import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { Box, Button, Group, Text, Textarea } from "@mantine/core";
import axios, { AxiosRequestConfig } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import SessionContainer from "../../auth/registration/SessionContainer";

export default function About({ user, updatedBio, setUpdatedBio }) {
  const { data, error } = useSWR(
    `/api/user/profile/?email=${user.email}`,
    fetcher
  );
  const router: NextRouter = useRouter();
  const [editting, setEditting] = useState(false);

  function onClickEdit() {
    setEditting(true);
  }

  function handleSuccess(bio: string) {
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
        <SessionContainer
          user={user}
          content={data}
          placeholder={<Text>This section is currently empty. . .</Text>}
        >
          {data && (
            <>
              {data.bio.length === 0 && (
                <Text>This section is currently empty. . .</Text>
              )}
            </>
          )}
          <Button color="violet" variant="outline" onClick={onClickEdit}>
            {data ? "Edit Bio" : "Add Bio"}
          </Button>
        </SessionContainer>
      </Box>
      <Box mt={25}>
        {editting ? (
          <ProfileForm
            router={router}
            setEditting={setEditting}
            setUpdatedBio={setUpdatedBio}
            handleSuccess={handleSuccess}
            handleFailure={handleFailure}
          />
        ) : (
          <p>{updatedBio ? updatedBio : data ? data.bio : " "}</p>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
}

type ProfileFormProps = {
  router: NextRouter;
  setEditting: (v: boolean) => void;
  setUpdatedBio: (v: string) => void;
  handleSuccess: (v: string) => void;
  handleFailure: () => void;
};

function ProfileForm({
  router,
  setEditting,
  setUpdatedBio,
  handleSuccess,
  handleFailure,
}: ProfileFormProps) {
  const form = useForm({
    initialValues: {
      bio: "",
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
      <Textarea
        minRows={6}
        placeholder="Bio"
        onChange={(e) => setUpdatedBio(e.target.value)}
        {...form.getInputProps("bio")}
      />
      <Group position="right" mt="md">
        <Button color="violet" type="submit" variant="outline">
          Submit
        </Button>
        <Button color="violet" onClick={() => setEditting(false)}>
          Cancel
        </Button>
      </Group>
    </form>
  );
}
