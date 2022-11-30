import { createStyles, Group, Button, Avatar, Skeleton } from "@mantine/core";
import { useSession, signOut, getSession } from "next-auth/react";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function Auth() {
  const { data: session, status } = useSession();

  const { classes } = useStyles();

  if (status === "loading") {
    return (
      <Group className={classes.hiddenMobile}>
        <span>
          <Skeleton height={40} circle />
        </span>
        <span>
          <Skeleton height={30} width={100} />
        </span>
      </Group>
    );
  } else if (session) {
    return (
      <Group className={classes.hiddenMobile}>
        <Link
          href="/community/users"
          as={`/community/users/@${session.user.name.split(" ").join("-")}`}
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
