import { Box, Text, useMantineTheme } from "@mantine/core";
import SlideIn from "../transitions/slide-in";
import Image from "next/image";

export default function SlideInTwo({ title, text, image }) {
  const theme = useMantineTheme();
  return (
    <>
      <SlideIn direction="right">
        <h1
          style={{
            color: "#312A45",
            letterSpacing: "3px",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          {title}
        </h1>
        <Text align="center">{text}</Text>
      </SlideIn>
      <Box mt={25} />
      <SlideIn direction="left">
        <div
          style={{
            boxShadow: `5px 5px 15px 5px ${theme.colors.violet[2]}`,
            height: "200px",
            width: "280px",
            margin: "auto",
          }}
        >
          <Image
            src={image}
            alt="example image"
            height={200}
            width={280}
            style={{
              borderRadius: "5px",
            }}
          ></Image>
        </div>
      </SlideIn>
    </>
  );
}
