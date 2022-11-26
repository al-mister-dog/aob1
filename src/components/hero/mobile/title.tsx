import { Box } from "@mantine/core";

export default function HeroTitle() {
  return (
    <Box
      style={{
        background: `url(/picasso-bull-stockmarket-1c.jpeg) center / cover`,
        height: 420,
        width: "100%",
      }}
      className="hero-headline"
    >
      <div
        style={{
          position: "relative",
          top: "60%",
          transform: "translateY(-50%)",
          margin: 10,
        }}
      >
        <h1
          style={{
            color: "white",
            margin: 0,
            padding: 0,
            letterSpacing: "3px",
            textAlign: "center",
            fontSize: 45,
            fontWeight: "bold",
            // boxShadow: colors.shadow
          }}
          // className="hero-headline"
        >
          Art of Banking
        </h1>
        <h2
          // className="hero-text-1"
          style={{
            color: "white",
            margin: 0,
            padding: 0,
            letterSpacing: "3px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Your Site to Learn Money and Banking
        </h2>
      </div>
    </Box>
  );
}
