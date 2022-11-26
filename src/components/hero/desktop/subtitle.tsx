import { Box } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import LazyShow from "../transitions/lazy-show";

export default function HeroSubTitle() {
  return (
    <Box
      style={{
        height: 400,
        width: "100%",
        backgroundColor: colors.background1,
        // background: `url(/basquiat.png) center / cover`,
      }}
    >
      <Box
        ml={5}
        mr={5}
        style={{
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <LazyShow>
          <h1
            style={{
                color: colors.textColor,

              letterSpacing: "3px",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            Understand What Money Is, Where It Goes, and Why It Matters.
          </h1>
        </LazyShow>
      </Box>
    </Box>
  );
}
