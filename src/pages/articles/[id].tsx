import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const articleId = "clan27iqy0005pf134oz3tol3";
  const { data, error } = useSWR(
    `/api/article/?email=almrdog@gmail.com`,
    fetcher
  );

  if (!data) {
    return <>...loading</>;
  }
  if (error) {
    return <>error</>;
  }
  const result = data.filter((d) => d.title === "Money and Banking");
  const article = parse(result[0].body);
  return (
    <>
      <h1>{result[0].title}</h1>
      {article}
    </>
  );
}
