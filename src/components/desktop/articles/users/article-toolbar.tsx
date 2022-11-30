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
export default function ArticleToolbar({ article }: { article: Article }) {
  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <Group id="article-toolbar-flex-group-1">
        <Avatar
          src={article.user.image}
          style={{ border: `1px solid ${colors.muiGray}` }}
          size="sm"
          radius="xl"
        />

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

        <Text size="xs" color="dimmed">
          {article.createdAt}
        </Text>
      </Group>
    </Box>
  );
}
