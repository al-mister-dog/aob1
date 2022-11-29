import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { useLoaded } from "../../../hooks/useLoaded";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import ProfileDesktop from "../../../components/desktop/profile";
import ProfileMobile from "../../../components/mobile/profile";

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
  }
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/community",
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (user) {
    return {
      props: {
        session,
        user,
      },
    };
  }
}
