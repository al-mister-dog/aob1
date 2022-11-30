import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { useLoaded } from "../../../hooks/useLoaded";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import ProfileDesktop from "../../../components/desktop/profile";
import ProfileMobile from "../../../components/mobile/profile";
import Loader from "../../../components/shared-ui/loader";

export default function Index({ user }) {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  if (loaded) {
    return isMobile ? (
      <ProfileMobile user={user} />
    ) : (
      <ProfileDesktop user={user} />
    );
  }
  return <Loader />;
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: { id: context.params.id },
  });

  if (user) {
    return {
      props: {
        user,
      },
    };
  }
}
