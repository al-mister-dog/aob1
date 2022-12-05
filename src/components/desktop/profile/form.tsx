import { Button, Group, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";

type Props = {
  
  setEditting: (v: boolean) => void;
  setUpdatedBio: (v: string) => void;
  handleSuccess: (v: string) => void;
  handleFailure: () => void;
};

export default function ProfileForm({
  setEditting,
  setUpdatedBio,
  handleSuccess,
  handleFailure,
}: Props) {
  const router: NextRouter = useRouter();

  const form = useForm({
    initialValues: {
      bio: "",
    },
  });

  async function onEditBio(values) {
    const res = await axios({
      url: "/api/user/bio",
      data: values,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });

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
