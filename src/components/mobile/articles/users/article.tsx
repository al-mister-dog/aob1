import Link from "next/link";

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Group,
  Menu,
  Tabs,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandTwitter,
  FilePlus,
  Dots,
  Edit,
} from "tabler-icons-react";

import { IconTrash, IconLink } from "@tabler/icons";
import { colors } from "../../../../config/colorPalette";
import parse from "html-react-parser";

interface Article {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    title: null | string;
    bio: null | string;
    emailVerified: null | boolean;
    image: string;
  };
}

interface User {
  id: string;
  name: string;
  email: string;
  title: null | string;
  bio: null | string;
  emailVerified: null | boolean;
  image: string;
}

interface Props {
  article: Article;
  user: User | null;
}

export default function UserArticle({
  article,
  user,
}: Props): JSX.Element | null {
  return (
    <Box mt={100} mx={25}>
      <ArticleToolbar article={article} user={user} />
      <h1 style={{ margin: 0, padding: 0, marginTop: 25, color: colors.text }}>
        {article.title}
      </h1>
      <Tabs defaultValue="article" color="violet">
        <Tabs.List>
          <Tabs.Tab value="article">Article</Tabs.Tab>
          <Tabs.Tab value="comments">Comments</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="article">
          <Box mt={25} mb={25}>
            {parse(article.body)}
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="comments">
          <Comments />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

function ArticleToolbar({
  article,
  user,
}: {
  article: Article;
  user: User | null;
}) {
  return (
    <Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Group id="article-toolbar-flex-group-1">
          <Avatar
            style={{ border: `1px solid ${colors.muiGray}` }}
            src={article.user.image}
            size="lg"
            radius="xl"
          />
          <Box>
            <Link href={`/community/users/${article.user.id}`}>
              <Text
                style={{
                  margin: 0,
                  padding: 0,
                  color: colors.text,
                }}
              >
                {article.user.name}
              </Text>
            </Link>
            <Group id="article-toolbar-flex-group-2">
              <Text size="xs" color="dimmed">
                {article.createdAt}
              </Text>
            </Group>
          </Box>
        </Group>
        <OptionsMenu article={article} user={user} />
      </Box>

      <Group mt={25}>
        <Button
          leftIcon={<FilePlus size={18} />}
          size="xs"
          color="violet"
          variant="outline"
        >
          Save
        </Button>
        <ActionIcon onClick={shareOnTwitter}>
          <BrandTwitter size={18} />
        </ActionIcon>

        <ActionIcon onClick={shareOnFaceBook}>
          <BrandFacebook size={18} />
        </ActionIcon>

        <ActionIcon onClick={shareOnLinkedIn}>
          <BrandLinkedin size={18} />
        </ActionIcon>

        <ActionIcon>
          <IconLink size={18} />
        </ActionIcon>
      </Group>
    </Box>
  );
}

function OptionsMenu({ article, user }) {
  return (
    <Menu>
      <Menu.Target>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="More"
          withArrow
        >
          <ActionIcon variant="subtle">
            <Dots color={colors.textColor} strokeWidth={3} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        {user.email === article.user.email && (
          <>
            <Menu.Item icon={<Edit size={14} />}>Update Article</Menu.Item>
            <Menu.Item color="red" icon={<IconTrash size={14} />}>
              Delete Article
            </Menu.Item>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}

function Comments() {
  const mockComments = [
    {
      id: "1",
      body: "This is a comment",
      createdAt: "2021-07-01",
      user: {
        id: "1",
        name: "John Doe",
        email: "johndoe@mail.com",
        image: "https://i.pravatar.cc/150?img=1",
      },
    },
    {
      id: "2",
      body: "This is another comment",
      createdAt: "2021-07-01",
      user: {
        id: "2",
        name: "Jane Doe",
        email: "janedoe@mail.com",
        image: "https://i.pravatar.cc/150?img=2",
      },
    },
  ];
  return (
    <Box>
      <h3
        style={{
          margin: 0,
          padding: 0,
          color: colors.text,
          marginTop: 25,
          marginBottom: 25,
        }}
      >
        Comments
      </h3>
      <Box mt={25}>
        {mockComments.map((comment) => (
          <Box key={comment.id}>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Group id="article-toolbar-flex-group-1">
                <Avatar
                  style={{ border: `1px solid ${colors.muiGray}` }}
                  src={comment.user.image}
                  size="lg"
                  radius="xl"
                />
                <Box>
                  <Link href={`/community/users/${comment.user.id}`}>
                    <Text
                      style={{
                        margin: 0,
                        padding: 0,
                        color: colors.text,
                      }}
                    >
                      {comment.user.name}
                    </Text>
                  </Link>
                  <Group id="article-toolbar-flex-group-2">
                    <Text size="xs" color="dimmed">
                      {comment.createdAt}
                    </Text>
                  </Group>
                </Box>
              </Group>
              <Box>
                <Box>{comment.body}</Box>
                <CommentOptionsMenu comment={comment} user={comment.user} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function CommentOptionsMenu({ comment, user }) {
  return (
    <Menu>
      <Menu.Target>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="More"
          withArrow
        >
          <ActionIcon variant="subtle">
            <Dots color={colors.textColor} strokeWidth={3} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        {user.email === comment.user.email && (
          <>
            <Menu.Item icon={<Edit size={14} />}>Update Comment</Menu.Item>
            <Menu.Item color="red" icon={<IconTrash size={14} />}>
              Delete Comment
            </Menu.Item>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}

function shareOnTwitter() {
  const url = window.location.href;
  const text = "Check out this article from Art of Banking";
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  window.open(twitterUrl, "_blank");
}

function shareOnFaceBook() {
  const url = window.location.href;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(facebookUrl, "_blank");
}

function shareOnLinkedIn() {
  const url = window.location.href;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${url}`;
  window.open(linkedInUrl, "_blank");
}
