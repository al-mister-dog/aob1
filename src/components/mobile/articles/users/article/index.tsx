import Link from "next/link";

import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Group,
  Tabs,
  Text,
} from "@mantine/core";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandTwitter,
  FilePlus,
} from "tabler-icons-react";
import { IconLink } from "@tabler/icons";
import {
  shareOnTwitter,
  shareOnFaceBook,
  shareOnLinkedIn,
} from "../../../../../helpers/api/share";
import parse from "html-react-parser";

import Comments from "../../../../desktop/articles/comments";
import UserOptions from "./user-options";
import { colors } from "../../../../../config/colorPalette";

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
}

export default function UserArticle({ article }: Props) {
  return (
    <Box mt={100} mx={25}>
      <ArticleToolbar article={article} />
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

function ArticleToolbar({ article }: { article: Article }) {
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
        <UserOptions article={article} />
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
