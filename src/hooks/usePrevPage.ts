import { lectureRoutes } from "../config/routes/lectureRoutes";

type IdProps = {
  id: number;
  lectureId: number;
};

export function usePrevPage(ids: IdProps) {
  const { id, lectureId } = ids;

  let path = "";
  let title = "";

  const thisLecture = lectureRoutes.routes[lectureId];
  const isFirstChapter = !thisLecture.routes
    .map((route) => route.id)
    .includes(id - 1);
  const isFirstLecture = lectureRoutes.routes[lectureId - 1] === undefined;

  function getPrevChapterLink() {
    path = thisLecture.routes.find((route) => route.id === id - 1).path;
    title = thisLecture.routes.find((route) => route.id === id - 1).title;
  }

  function getPrevLectureLink() {
    path = `/${lectureRoutes.routes[lectureId - 1].path.split(`/`)[2]}`;
    title = lectureRoutes.routes[lectureId - 1].title;
  }

  function getIntroductionLink() {
    path === `/${lectureRoutes.routes[0].path.split(`/`)[2]}`;
    title = "Back to Lectures";
  }

  if (isFirstChapter) {
    isFirstLecture ? getIntroductionLink() : getPrevLectureLink();
    return { path, title };
  } else {
    getPrevChapterLink();
    return { path, title };
  }
}
