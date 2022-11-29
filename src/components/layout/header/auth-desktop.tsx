import { createStyles, Group, Button, Avatar } from "@mantine/core";
import { PrismaClient } from "@prisma/client";
import useSWR from "swr";
import { useSession, signOut, getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { fetcher } from "../../../lib/fetcher";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function Auth() {
  const { data: session } = useSession();

  const { classes } = useStyles();

  useEffect(() => {}, []);
  if (session) {
    return (
      <Group className={classes.hiddenMobile}>
        <Link
          href="/community/users"
          as={`/community/users/@${session.user.name.split(' ').join('-')}`}
          passHref
        >
          <Avatar
            src={session.user.image || null}
            alt={`${session.user.name} profile picture`}
            radius="xl"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <Link href="/" passHref>
          <Button color="violet" onClick={() => signOut()}>
            Sign out
          </Button>
        </Link>
      </Group>
    );
  }
  return (
    <Group className={classes.hiddenMobile}>
      <Link href="/registration/signin" passHref>
        <Button color="violet">Sign in</Button>
      </Link>
    </Group>
  );
}
