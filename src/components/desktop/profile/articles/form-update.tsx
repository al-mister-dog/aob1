import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import SubScript from "@tiptap/extension-subscript";

import { Box, Text, TextInput, Button, Textarea, Loader } from "@mantine/core";

//<sub> <sup>
export default function TextEditor({ user, article }) {
  const { email } = user;
  const router = useRouter();
  const [title, setTitle] = useState(article.title);
  const [preview, setPreview] = useState(article.preview);
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: article.body,
  });

  async function updateArticle() {
    setLoading(true);
    const body = editor.getHTML();
    const { status, data } = await axios.put("/api/articles", {
      id: article.id,
      title,
      preview,
      body,
      email,
    });
    if (status === 201) {
      setLoading(false);
      router.replace("/community/users");
    } else {
      setLoading(false);
      toast.error(
        "Something went wrong with posting your article. Please try again later",
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
  if (loading) {
    return (
      <Box
        style={{
          minWidth: 390,
          maxWidth: "50%",
          margin: "auto",
          marginTop: 50,
        }}
      >
        <Loader />
      </Box>
    );
  }
  return (
    <Box>
      <Box mt={25}>
        <TextInput
          label="Title"
          value={title}
          onChange={(val) => setTitle(val.target.value)}
        />
        <Text mt={10} size="sm">
          Body
        </Text>
        <RichTextEditor editor={editor}>
          <RichTextEditor.Toolbar
            sticky
            stickyOffset={60}
            style={{ backgroundColor: colors.background3 }}
          >
            {/* <Button color="violet" variant="outline" onClick={addImage}>
              Add Image
            </Button> */}
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
              <RichTextEditor.Subscript />
              <RichTextEditor.Superscript />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
        <Textarea
          mt={10}
          label="Preview Paragraph"
          description="Write a small opening paragraph. This could be the first few lines of your article."
          maxLength={240}
          rows={3}
          value={preview}
          onChange={(val) => setPreview(val.target.value)}
        />
      </Box>
      <Box
        pt={10}
        pb={10}
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Button color="violet" onClick={updateArticle}>
          Save
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
}

import parse from "html-react-parser";
import { colors } from "../../../../config/colorPalette";
import Router from "next/router";
