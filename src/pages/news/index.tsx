import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

export default function Index() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );
  
  if (!data) {
    return <>...loading</>;
  }
  if (error) {
    return <>error</>;
  }
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
