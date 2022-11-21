import Assignment from "./assignment";
import Main from "../../shared-ui/SpoilerText";
import Title from "./title";

export default function Article({ slug, title, text }) {
  return (
    <div
      id="article-container"
      style={{
        padding: `0px 10px 0px 10px`,
        marginTop: "100px",
      }}
    >
      <Title slug={slug} title={title} />
      <div style={{ marginTop: "25px" }}>
        <Main text={text} />
      </div>
    </div>
  );
}
