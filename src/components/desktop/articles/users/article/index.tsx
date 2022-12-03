import Link from "next/link";

import { ActionIcon, Avatar, Box, Group, Text, Tooltip } from "@mantine/core";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandTwitter,
  FilePlus,
} from "tabler-icons-react";

import { IconLink } from "@tabler/icons";
import { colors } from "../../../../../config/colorPalette";
import parse from "html-react-parser";
import { getReadTime } from "../../../../../helpers/ux/getReadTime";
import { copyLink } from "../../../../../helpers/ux/copyLink";
import Comments from "../../comments";
import UserOptions from "./user-options";
import {
  shareOnTwitter,
  shareOnFaceBook,
  shareOnLinkedIn,
} from "../../../../../helpers/api/share";

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

export default function UserArticle({ article }: { article: Article }) {
  return (
    <Box mt={60} mx="auto" style={{ maxWidth: 850 }}>
      <ArticleToolbar article={article} />
      <h1 style={{ margin: 0, padding: 0, marginTop: 25, color: colors.text }}>
        {article.title}
      </h1>

      {parse(article.body)}
      {/* <Comments /> */}
    </Box>
  );
}

function ArticleToolbar({ article }: { article: Article }) {
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
        <UserOptions article={article} />
      </Group>
    </Box>
  );
}
