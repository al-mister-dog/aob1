import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../config/media-query";
import { useLoaded } from "../../hooks/useLoaded";
import IndexMobile from "../../components/mobile/lectures/index";
import IndexDesktop from "../../components/desktop/lectures/index";
import Loader from "../../components/shared-ui/loader";

export default function LecturesPage() {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  if (loaded) {
    return isMobile ? <IndexMobile /> : <IndexDesktop />;
  }
  return <Loader />;
}
