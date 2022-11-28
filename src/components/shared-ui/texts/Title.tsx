import { colors } from "../../../config/colorPalette";

export default function TitleComponent({ children }) {
  return <h1 style={{ color: colors.text, letterSpacing: 1 }}>{children}</h1>;
}
