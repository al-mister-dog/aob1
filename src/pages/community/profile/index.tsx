import { useSession } from "next-auth/react";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import { useRouter } from "next/router";
import { Box } from "@mantine/core";
import ProfileDesktop from "../../../components/desktop/profile";
import ProfileMobile from "../../../components/mobile/profile";

export default function Index() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isMobile = useMediaQuery(mediaQuery);

  const loading = status === "loading";
  if (!session && loading) {
    return <Box style={{ height: "100vh" }}></Box>;
  } else if (session?.user) {
    return isMobile ? (
      <ProfileMobile user={session.user} />
    ) : (
      <ProfileDesktop user={session.user} />
    );
  } else router.push("/registration/signin");
}
