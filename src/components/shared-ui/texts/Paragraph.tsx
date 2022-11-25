import { colors } from "../../../config/colorPalette";

export function Paragraph({ children }) {
  return (
    <p
      style={{
        letterSpacing: "1px",
        marginBottom: "25px",
        color: colors.text,
        fontSize: 14,
      }}
    >
      {children}
    </p>
  );
}
