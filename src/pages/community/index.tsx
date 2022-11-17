import { Box } from "@mantine/core";
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";

export default function Index() {
  const { data: session } = useSession();
  return (
    <>
      <Box>
        <h1>Welcome {session.user.name}</h1>
        <Image
          src={session.user.image}
          alt={session.user.name}
          height={100}
          width={100}
        ></Image>
        {JSON.stringify(session)}
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/registration/signin",
      },
    };
  }
  return {
    props: { session },
  };
}
