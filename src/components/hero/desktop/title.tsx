import { Box } from "@mantine/core";
import { colors } from "../../../config/colorPalette";
import pic from "../../../../public/picasso-bull-stockmarket-1.jpeg";
import Image from "next/image";
export default function HeroTitle() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
      className="hero-headline"
    >
      <Image
        src={pic}
        height={500}
        width={500}
        alt="picasso style bull infront of a stock market graph"
      ></Image>
      <Box>
        <Box
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: 50,
          }}
        >
          <h1
            style={{
              color: colors.text,
              margin: 0,
              padding: 0,
              letterSpacing: "3px",
              textAlign: "left",
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
              color: colors.text,
              margin: 0,
              padding: 0,
              letterSpacing: "3px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            Your Site to Learn Money and Banking
          </h2>
        </Box>
      </Box>
    </Box>
  );
}
