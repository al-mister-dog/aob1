// import { PrismaClient } from "@prisma/client";
import { parseDate } from "../../helpers/api/parseDate";
import { prisma } from "../../lib/prisma";
import ArticleDesktop from "../../components/desktop/articles/users/article";
import ArticleMobile from "../../components/mobile/articles/users/article";
import { useLoaded } from "../../hooks/useLoaded";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../config/media-query";

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

export default function UserArticle({ article }: { article: Article }) {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);
  if (loaded) {
    return isMobile ? (
      <ArticleMobile article={article} />
    ) : (
      <ArticleDesktop article={article} />
    );
  }
  return null;
}

export async function getServerSideProps(context) {
  const id = context.query.id[1];

  const data = await prisma.post.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  const article = {
    id: data.id,
    title: data.title,
    body: data.body,
    createdAt: parseDate(`${data.createdAt}`),
    user: data.user,
  };

  return { props: { article } };
}
