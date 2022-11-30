import { AppShell } from "@mantine/core";
import NavbarDesktop from "./navbar-desktop";
import HeaderUi from "./header/header";
import Footer from "./footer";

export default function Layout(props: any) {
  return (
    <AppShell
      styles={{
        main: {
          background: "#fcfbfe",
          padding: 0,
        },
      }}
      fixed={false}
      navbar={<NavbarDesktop />}
      header={<HeaderUi />}
      footer={<Footer />}
    >
      {props.children}
    </AppShell>
  );
}
