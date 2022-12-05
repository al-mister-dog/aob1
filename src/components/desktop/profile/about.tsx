import { useState } from "react";
import { Box, Button, Text } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import { fetcher } from "../../../lib/fetcher";
import SessionContainer from "../../auth/registration/SessionContainer";
import ProfileForm from "./form";

export default function About({ user, updatedBio, setUpdatedBio }) {
  const { data, error } = useSWR(
    `/api/user/profile/?email=${user.email}`,
    fetcher
  );

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

  if (error) {
    return <Box>Something went wrong...</Box>;
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
              {!data.bio && <Text>This section is currently empty. . .</Text>}

              <Button color="violet" variant="outline" onClick={onClickEdit}>
                {data ? "Edit Bio" : "Add Bio"}
              </Button>
            </>
          )}
        </SessionContainer>
      </Box>
      <Box mt={25}>
        {editting ? (
          <ProfileForm
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
