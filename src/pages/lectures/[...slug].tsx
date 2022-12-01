import { useAppDispatch } from "../../app/hooks";
import { setActions } from "../../features/actions/actionsSlice";
import { setup } from "../../features/banks/banksSlice";
import { refreshSettings } from "../../features/settings/settingsSlice";
import { useEffect } from "react";
import { Box } from "@mantine/core";
import { introductoryTexts } from "../../config/parts";
import { getRouteObjectData } from "../../helpers/routeMethods";
import { lectureRoutes } from "../../config/routes/lectureRoutes";
import { useLoaded } from "../../hooks/useLoaded";
import { mediaQuery } from "../../config/media-query";
import { useMediaQuery } from "@mantine/hooks";
import LecturePageDesktop from "../../components/desktop/lectures/banking/pages/lecture-page";
import LecturePageMobile from "../../components/mobile/lectures/lecture-page";

export default function LecturePath({
  slug,
  id,
  lectureId,
  title,
  introductoryTexts,
  keyTermsIds,
}) {
  const { paragraphs, assignment, sources } = introductoryTexts;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setup({ id }));
    dispatch(setActions({ id }));
    dispatch(refreshSettings());
  }, []);

  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);
  const nextLecture = { id, lectureId };
  if (loaded) {
    return isMobile ? (
      <LecturePageMobile
        slug={slug}
        title={title}
        sources={sources}
        text={paragraphs}
        assignment={assignment}
        keyTermsIds={keyTermsIds}
        nextLecture={nextLecture}
      />
    ) : (
      <LecturePageDesktop
        slug={slug}
        title={title}
        sources={sources}
        text={paragraphs}
        assignment={assignment}
        keyTermsIds={keyTermsIds}
        nextLecture={nextLecture}
      />
    );
  }

  return <Box style={{ height: "100vh" }}></Box>;
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const data = getRouteObjectData(slug);
  const { id, lectureId, title, keyTermsIds } = data;

  return {
    props: {
      slug,
      id,
      lectureId,
      title,
      introductoryTexts: introductoryTexts[id],
      keyTermsIds,
      key: slug,
    },
  };
}

export async function getStaticPaths() {
  const paths = lectureRoutes.routes.flatMap((route) => {
    return route.routes.map((r) => ({
      params: { slug: r.path.split("/").slice(1, 3) },
    }));
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
