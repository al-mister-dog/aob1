import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";
import HeaderUi from "./header/header";
import { mediaQuery } from "../../config/media-query";
import { useLoaded } from "../../hooks/useLoaded";
import Footer from "./footer";

export default function Layout(props: any) {
  const [opened, setOpened] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);
  if (loaded) {
    return (
      <AppShell
        styles={{
          main: {
            background: "#fcfbfe",
            padding: 0,
          },
        }}
        fixed={isMobile}
        navbar={
          isMobile ? (
            <NavbarMobile mobileOpen={mobileOpen} />
          ) : (
            <NavbarDesktop opened={opened} />
          )
        }
        header={<HeaderUi />}
        footer={<Footer />}
      >
        {props.children}
      </AppShell>
    );
  }
  return null;
}
