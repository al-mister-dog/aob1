import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { parseDate } from "../../helpers/parseDate";

import ArticleDesktop from "../../components/desktop/articles/users/article";
import ArticleMobile from "../../components/mobile/articles/users/article";
import { useLoaded } from "../../hooks/useLoaded";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../config/media-query";

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const id = context.query.id[1];

  const session = await getSession(context);
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

  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    return { props: { article, user } };
  } else {
    return { props: { article, user: null } };
  }
}

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

interface User {
  id: string;
  name: string;
  email: string;
  title: null | string;
  bio: null | string;
  emailVerified: null | boolean;
  image: string;
}

function getReadTime(string) {
  let eachWord = [];
  let divided = eachWord.length / 200;
  let int = Math.round(divided);
  let decimal = (divided - int) / 0.6;
}

export default function UserArticle({
  article,
  user,
}: {
  article: Article;
  user: User | null;
}) {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);
  if (loaded) {
    return isMobile ? (
      <ArticleMobile article={article} user={user} />
    ) : (
      <ArticleDesktop article={article} user={user} />
    );
  }
  return null;
}
