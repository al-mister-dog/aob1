import Assignment from "./assignment";
import Main from "../../shared-ui/SpoilerText";
import Title from "./title";

export default function Article({ slug, title, text }) {
  return (
    <div
      id="article-container"
      style={{
        marginTop: 135,
      }}
    >
      <Title slug={slug} title={title} />
      <div style={{ marginTop: "25px" }}>
        <Main text={text} />
      </div>
    </div>
  );
}
