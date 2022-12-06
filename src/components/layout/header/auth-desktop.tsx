import { Group, Button, Avatar, Skeleton } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Auth() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <Group className="hidden-mobile">
      {
        // Check if the user is not signed in and the session data is still being fetched
        !session && loading ? (
          <>
            <Skeleton height={38} circle />
            <Skeleton height={30} width={94.84} />
          </>
        ) : // Check if the user is signed in and the session data is available
        session.user ? (
          <>
            <Link
              href="/community/profile"
              // as={`/community/users/@${session.user.name.split(" ").join("-")}`}
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
          </>
        ) : (
          // Otherwise, the user is not signed in and the session data is not being fetched
          <Link href="/registration/signin" passHref>
            <Button color="violet">Sign in</Button>
          </Link>
        )
      }
    </Group>
  );
}
