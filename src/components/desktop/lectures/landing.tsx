import { useHover, useMediaQuery } from "@mantine/hooks";
import { Box, Card, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { mediaQuery } from "../../../config/media-query";
import Title from "../../shared-ui/texts/Title";
import image1 from "../../../../public/lectures-1.jpg";
import image2 from "../../../../public/clearinghouse.jpeg";

import fed2 from "../../../../public/fed-2.jpeg";
import { useResizeImage } from "../../../hooks/useResizeImage";
import { colors } from "../../../config/colorPalette";
import { ChevronRight } from "tabler-icons-react";

export default function Intro({ title, text, nextPath, id }) {
  const isMobile = useMediaQuery(mediaQuery);
  const { hovered, ref } = useHover();

  const imagesSizes = useResizeImage(424, 640, isMobile ? 4.5 : 7);

  const images = [
    { img: image1, alt: "Image of a Bank by Viktor Forgacs" },
    {
      img: image2,
      alt: "Clearing House of The Associated Banks of New York City by Richard Rummel",
    },
    {
      img: fed2,
      alt: "President Wilson signing the Federal Reserve Act  1923 painting by Wilburg G. Kurtz; photo courtesy of Woodrow Wilson Presidential Library",
    },
  ];
  const image = images[id];

  return (
    <>
      <div
        style={{
          padding: `0px ${isMobile ? "5px" : "200px"} 0px ${
            isMobile ? "5px" : "50px"
          }`,
          marginTop: "100px",
        }}
      >
        <Title>{title}</Title>
        <div
          style={{
            borderRadius: 5,
            overflow: "hidden",
            width: imagesSizes.width,
            height: imagesSizes.height,
          }}
        >
          <Image
            src={image.img}
            height={imagesSizes.height}
            width={imagesSizes.width}
            alt={image.alt}
            style={{ margin: "auto" }}
          ></Image>
        </div>
        <Text
          size="sm"
          weight="bold"
          style={{
            paddingBottom: 0,
            letterSpacing: "1px",
            color: colors.text,
          }}
        >
          {image.alt}
        </Text>
        <div style={{ marginTop: "25px" }}>
          <Text
            size="xl"
            sx={{
              letterSpacing: "1px",
              marginBottom: "25px",
            }}
          >
            {text}
          </Text>
          <div style={{ marginTop: "25px" }}>
            <Link href={`/lectures${nextPath}`}>
              <Card
                ref={ref}
                style={{
                  backgroundColor: hovered
                    ? colors.background3
                    : colors.background1,
                  color: colors.text,
                  cursor: "pointer",
                }}
              >
                <Box p={25} style={{ display: "flex" }}>
                  <Box style={{ flex: 1 }}>
                    <Text
                      size="xl"
                      weight="bold"
                      align="right"
                      style={{ letterSpacing: 1, color: colors.textColor }}
                    >
                      Continue. . .
                    </Text>
                  </Box>
                  <Box
                    style={{
                      padding: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ChevronRight color="black" />
                  </Box>
                </Box>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
