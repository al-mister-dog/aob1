import { useSession } from "next-auth/react";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../config/media-query";
import ProfileDesktop from "../../../components/desktop/profile";
import ProfileMobile from "../../../components/mobile/profile";
import { Box } from "@mantine/core";
import { useRouter } from "next/router";

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

// import { getSession } from "next-auth/react";
// import { useLoaded } from "../../../hooks/useLoaded";
// import { useMediaQuery } from "@mantine/hooks";
// import { mediaQuery } from "../../../config/media-query";
// import ProfileDesktop from "../../../components/desktop/profile";
// import ProfileMobile from "../../../components/mobile/profile";
// import { Box } from "@mantine/core";
// import { useRouter } from "next/router";
// import { useEffect } from "react";


// export default function Index(props) {
//   const { user } = props;
//   const router = useRouter();
//   const loaded = useLoaded();
//   const isMobile = useMediaQuery(mediaQuery);

//   useEffect(() => {
//     if (!user) {
//       router.push("/community");
//     }
//   }, [user]);

//   if (loaded && user) {
//     return isMobile ? (
//       <ProfileMobile user={user} />
//     ) : (
//       <ProfileDesktop user={user} />
//     );
//   } else {
//     return <Box style={{ height: "100vh" }}></Box>;
//   }
// }

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   return {
//     props: {
//       user: session ? session.user : null,
//     },
//   };
// }