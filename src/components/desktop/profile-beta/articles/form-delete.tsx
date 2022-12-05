import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Box, Text, TextInput, Button, Textarea } from "@mantine/core";

//<sub> <sup>
export default function TextEditor({ user, article }) {
  const router = useRouter();
  async function updateArticle() {
    const { status, data } = await axios.post("/api/article", {
      id: article.id,
    });
    if (status === 201) {
      router.replace("/community/users");
    } else {
      toast.error(
        "Something went wrong with deleting your article. Please try again later",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  return <Box></Box>;
}
