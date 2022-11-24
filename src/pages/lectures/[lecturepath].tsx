import { lectureRoutes } from "../../config/routes/lectureRoutes";
import { homeTexts } from "../../config/homeTexts";
import LandingDesktop from "../../components/desktop/lectures/landing";
import { useLoaded } from "../../hooks/useLoaded";
import { mediaQuery } from "../../config/media-query";
import { useMediaQuery } from "@mantine/hooks";

export default function LecturePath({ id, title, nextPath }) {
  const { text } = homeTexts[id];

  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);

  // if (loaded) {
  //   return isMobile ? : <LandingDesktop title={title} text={text} nextPath={nextPath} id={id} />
  // }
  return (
    <>
      <LandingDesktop title={title} text={text} nextPath={nextPath} id={id} />
    </>
  );
}

export async function getStaticProps(context) {
  const { lecturepath } = context.params;

  const data = lectureRoutes.routes
    .map((route) => {
      const { id, title, path, routes } = route;
      return { id, title, path, nextPath: routes[0].path };
    })
    .find((route) => route.path.split("/")[2] === lecturepath);

  const { id, title, path, nextPath } = data;
  return {
    props: {
      id,
      title,
      path,
      nextPath,
    },
  };
}

export async function getStaticPaths() {
  const paths = lectureRoutes.routes.flatMap((route) => {
    return {
      params: { lecturepath: route.path.split("/")[2] },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
