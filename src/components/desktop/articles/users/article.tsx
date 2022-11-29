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

function getReadTime(string) {
  let eachWord = [];
  let divided = eachWord.length / 200;
  let int = Math.round(divided);
  let decimal = (divided - int) / 0.6;
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
          </Group>
        </Box>
      </Group>

      <Group>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Share on Twitter"
          withArrow
        >
          <ActionIcon>
            <BrandTwitter size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Share on Facebook"
          withArrow
        >
          <ActionIcon>
            <BrandFacebook size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Share on LinkedIn"
          withArrow
        >
          <ActionIcon>
            <BrandLinkedin size={19} />
          </ActionIcon>
        </Tooltip>
        <Tooltip
          style={{ backgroundColor: colors.textColor }}
          label="Copy Link"
          withArrow
        >
          <ActionIcon>
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
                <Link
                  href={{
                    pathname: `/articles/users/update-article`,
                    query: { articleId: article.id },
                  }}
                >
                  <Menu.Item icon={<Edit size={14} />}>
                    Update Article
                  </Menu.Item>
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
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Box>
  );
}

//https://deploy-preview-subdomain-with-unique-hash.vercel.app
