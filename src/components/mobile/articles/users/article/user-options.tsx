import Link from "next/link";
import { ActionIcon, Menu, Skeleton, Tooltip } from "@mantine/core";
import { IconDots } from "@tabler/icons";
import { useSession } from "next-auth/react";
import { colors } from "../../../../../config/colorPalette";
import useSWR from "swr";
import { fetcher } from "../../../../../lib/fetcher";
import UserSessionOptions from "./user-session-options";
import UserAuthOptions from "./user-auth-options";

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

export default function UserMenu({ article }: { article: Article }) {
  //check if the user is logged in
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }
  if (status === "unauthenticated") {
    return null;
  } else if (status === "authenticated") {
    return (
      <>
        {session.user && (
          <Menu>
            <Menu.Target>
              <Tooltip
                style={{ backgroundColor: colors.textColor }}
                label="More"
                withArrow
              >
                <ActionIcon variant="subtle">
                  <IconDots color={colors.textColor} strokeWidth={3} />
                </ActionIcon>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown>
              <UserMenuItems article={article} user={session.user} />
            </Menu.Dropdown>
          </Menu>
        )}
      </>
    );
  }
}

function UserMenuItems({ article, user }) {
  const { data, error } = useSWR(
    `/api/user/profile/?email=${user.email}`,
    fetcher
  );

  if (!data) {
    return (
      <>
        <Skeleton mt={10} height={8} />
        <Skeleton mt={10} height={8} />
      </>
    );
  } else if (error) {
    return <div>failed to load</div>;
  } else if (data.id === article.user.id) {
    return <UserAuthOptions article={article} user={data} />;
  } else {
    return <UserSessionOptions article={article} user={data} />;
  }
}
