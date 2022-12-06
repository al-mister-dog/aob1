import { Group, Button, Text, Skeleton } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function MobileSignin({ closeDrawer }) {
  return (
    <Group>
      <Auth closeDrawer={closeDrawer} />
    </Group>
  );
}

function Auth({ closeDrawer }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (!session && loading) {
    return (
      <Group position="center" grow pb="xl" px="md">
        <Skeleton height={10} width={100} />
        <Skeleton height={30} width={100} />
      </Group>
    );
  } else if (session?.user) {
    return (
      <>
        <Link href="/community" passHref>
          <Text>{session.user.name}</Text>
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
        <Button color="violet" variant="default" onClick={closeDrawer}>
          Sign in
        </Button>
      </Link>
    );
  }
}
