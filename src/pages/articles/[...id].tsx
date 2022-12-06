import ArticleDesktop from "../../components/desktop/articles/users/article";
import ArticleMobile from "../../components/mobile/articles/users/article";

import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../config/media-query";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import Loader from "../../components/shared-ui/loader";
import { Box } from "@mantine/core";
import { useRouter } from "next/router";

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

export default function UserArticle() {
  const router = useRouter();
  const id = router.query.id[1];
  const { data, error } = useSWR(`/api/articles/${id}`, fetcher);
  let article: Article = data;
  const isMobile = useMediaQuery(mediaQuery);
  if (error) {
    return <Box>Sorry, we couldn't load article at this time</Box>;
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

// export async function getServerSideProps(context) {
//   const id = context.query.id[1];
//   return { props: { id } };
// }
