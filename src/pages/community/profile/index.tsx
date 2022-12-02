import { getSession, useSession } from "next-auth/react";
import { useLoaded } from "../../../hooks/useLoaded";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import ProfileDesktop from "../../../components/desktop/profile";
import ProfileMobile from "../../../components/mobile/profile";

import { PrismaClient } from "@prisma/client";
import { Box } from "@mantine/core";

export default function Index(props) {
  const { user } = props;

  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  if (loaded) {
    return isMobile ? (
      <ProfileMobile user={user} />
    ) : (
      <ProfileDesktop user={user} />
    );
  } else {
    return <Box style={{ height: "100vh" }}></Box>;
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/community",
      },
    };
  }
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (user) {
    return {
      props: {
        user,
      },
    };
  }
}
