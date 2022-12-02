import Link from "next/link";

import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Menu,
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
import { getReadTime } from "../../../../helpers/ux/getReadTime";
import { copyLink } from "../../../../helpers/ux/copyLink";
import Comments from "../comments";

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

export default function UserArticle({
  article,
  user,
}: {
  article: Article;
  user: User | null;
}) {
  return (
    <Box mt={60} mx="auto" style={{ maxWidth: 850 }}>
      <ArticleToolbar article={article} user={user} />
      <h1 style={{ margin: 0, padding: 0, marginTop: 25, color: colors.text }}>
        {article.title}
      </h1>

      {parse(article.body)}
      {/* <Comments /> */}
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
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Group id="article-toolbar-flex-group-1">
        <Avatar
          src={article.user.image}
          style={{ border: `1px solid ${colors.muiGray}` }}
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
            <Text size="xs" color="dimmed">
              {getReadTime(article.body)}
            </Text>
          </Group>
        </Box>
      </Group>

      <Group>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Share on Twitter"
          withArrow
        >
          <ActionIcon onClick={shareOnTwitter}>
            <BrandTwitter size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Share on Facebook"
          withArrow
        >
          <ActionIcon onClick={shareOnFaceBook}>
            <BrandFacebook size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Share on LinkedIn"
          withArrow
        >
          <ActionIcon onClick={shareOnLinkedIn}>
            <BrandLinkedin size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Copy Link"
          withArrow
        >
          <ActionIcon onClick={copyLink}>
            <IconLink size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Save"
          withArrow
        >
          <ActionIcon>
            <FilePlus color={colors.textColor} />
          </ActionIcon>
        </Tooltip>
        {user && (
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
              <UserMenuItems article={article} user={user} />
            </Menu.Dropdown>
          </Menu>
        )}
      </Group>
    </Box>
  );
}
function UserMenuItems({ article, user }: { article: Article; user: User }) {
  if (user.id === article.user.id) {
    return <AuthUserMenuItems article={article} user={user} />;
  }
  return (
    <>
      <Menu.Item>Show less like this</Menu.Item>
      <Menu.Item>Mute</Menu.Item>
    </>
  );
}
function AuthUserMenuItems({ article, user }) {
  return (
    <>
      {user.email === article.user.email && (
        <>
          <Link
            href={{
              pathname: `/articles/users/update-article`,
              query: { articleId: article.id },
            }}
          >
            <Menu.Item icon={<Edit size={14} />}>Update Article</Menu.Item>
          </Link>
          <Link
            href={{
              pathname: `/articles/users/delete-article`,
              query: { articleId: article.id },
            }}
          >
            <Menu.Item color="red" icon={<IconTrash size={14} />}>
              Delete Article
            </Menu.Item>
          </Link>
        </>
      )}
    </>
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
