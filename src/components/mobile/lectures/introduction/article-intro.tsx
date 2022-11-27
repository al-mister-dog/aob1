import { Box } from "@mantine/core";
import { colors } from "../../../../config/colorPalette";
import Title from "../title";

export default function Article({ slug, title, text }) {
  return (
    <div
      id="article-container"
      style={{
        marginTop: 135,
      }}
    >
      <Title slug={slug} title={title} />
      <Box mt={25}>
        {text.map((t) => (
          <p
            key={t}
            style={{
              letterSpacing: "1px",
              marginBottom: "25px",
              color: colors.text,
              fontSize: 14,
            }}
          >
            {t}
          </p>
        ))}
      </Box>
    </div>
  );
}
