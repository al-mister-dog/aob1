import { Group, Button, Text, Skeleton } from "@mantine/core";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function MobileSignin({ closeDrawer }) {
  return (
    <Group position="center" grow pb="xl" px="md">
      <Auth closeDrawer={closeDrawer} />
    </Group>
  );
}

function Auth({ closeDrawer }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (!session && loading) {
    return (
      <>
        <Skeleton height={10} width={100} />
        <Skeleton height={30} width={100} />
      </>
    );
  } else if (session?.user) {
    return (
      <>
        <div onClick={closeDrawer}>
          <Link href="/community/profile" passHref>
            <Text>{session.user.name}</Text>
          </Link>
        </div>

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
