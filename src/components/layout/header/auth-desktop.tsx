import { Group, Button, Avatar, Skeleton } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function SigninDesktop() {
  return (
    <Group className="hidden-mobile">
      <Auth />
    </Group>
  );
}

function Auth() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (!session && loading) {
    return (
      <>
        <Skeleton height={38} circle />
        <Skeleton height={30} width={94.84} />
      </>
    );
  } else if (session?.user) {
    return (
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
    );
  } else {
    return (
      <Link href="/registration/signin" passHref>
        <Button color="violet">Sign in</Button>
      </Link>
    );
  }
}
