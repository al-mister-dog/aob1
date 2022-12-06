import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../config/media-query";
import { useLoaded } from "../hooks/useLoaded";
import type { NextPage } from "next";
import HeroDesktop from "../components/hero/hero-test";
import HeroMobile from "../components/hero/hero-mobile";
import { Box } from "@mantine/core";

function IndexPage() {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  if (loaded) {
    return isMobile ? <HeroMobile /> : <HeroDesktop />;
  } else {
    return <Box style={{ height: "100vh" }}></Box>;
  }
}

export default IndexPage;

// const IndexPage: NextPage = () => {
