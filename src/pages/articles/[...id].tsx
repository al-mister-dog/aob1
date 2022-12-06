import ArticleDesktop from "../../components/desktop/articles/users/article";
import ArticleMobile from "../../components/mobile/articles/users/article";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../config/media-query";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import Loader from "../../components/shared-ui/loader";
import { Box } from "@mantine/core";
import { PrismaClient } from "@prisma/client";
import { parseDate } from "../../helpers/api/parseDate";
import { prisma } from "../../lib/prisma";
interface Article {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    email: string;
    title: null | string;
    bio: null | string;
    emailVerified: null | boolean;
    image: string;
  };
}

export default function UserArticle({ id }) {
  const { data, error } = useSWR(`/api/articles/${id}`, fetcher);
  let article: Article = data;
  const isMobile = useMediaQuery(mediaQuery);
  if (error) {
    return <Box>{JSON.stringify(error)}</Box>;
  } else if (article) {
    return isMobile ? (
      <ArticleMobile article={article} />
    ) : (
      <ArticleDesktop article={article} />
    );
  } else {
    return (
      <Box mt={60} mx="auto" style={{ maxWidth: 850 }}>
        <Loader />
      </Box>
    );
  }
}

export async function getServerSideProps(context) {
  const id = context.query.id[1];

  return { props: { id } };
}



// export async function getServerSideProps(context) {
//   const id = context.query.id[1];

//   const data = await prisma.post.findUnique({
//     where: { id },
//     include: {
//       user: true,
//     },
//   });

//   const article = {
//     id: data.id,
//     title: data.title,
//     body: data.body,
//     createdAt: parseDate(`${data.createdAt}`),
//     user: data.user,
//   };

//   return { props: { article } };
// }