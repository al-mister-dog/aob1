import { Navbar } from "@mantine/core";
import { useRouter } from "next/router";

import LecturesContent from "../navigation/nav-learn-content/lectures-list-desktop";
import ArticlesContent from "../navigation/nav-learn-content/articles-list-desktop";
export default function NavbarUi({ opened }) {
  const router = useRouter();
  let currentPage = router.pathname.split("/")[1];

  if (currentPage === "lectures" || currentPage === "articles") {
    return (
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 270 }}
        style={{ position: "sticky", top: 0, left: 0 }}
      >
        {currentPage === "lectures" && <LecturesContent />}
        {currentPage === "articles" && <ArticlesContent />}
      </Navbar>
    );
  }
  return null;
}
