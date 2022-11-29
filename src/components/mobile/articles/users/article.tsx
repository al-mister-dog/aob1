import Link from "next/link";

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
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
    <Box mt={100} mx={25}>
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
        <ActionIcon>
          <BrandTwitter size={18} />
        </ActionIcon>

        <ActionIcon>
          <BrandFacebook size={18} />
        </ActionIcon>

        <ActionIcon>
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
