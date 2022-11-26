import { Box } from "@mantine/core";
import example1 from "../../../public/aob_example2_cropped.png";
import example2 from "../../../public/aob_example3.png";
import { colors } from "../../config/colorPalette";
import HeroTitle from "./desktop/title";
import HeroSubTitle from "./desktop/subtitle";
import Example from "./example";


export default function HeroMobile() {
  const examples = {
    example1: {
      title: "See Behind the Numbers",
      text: `Use the tools that economists use to give us all the figures we see 
      everyday in the news. Find out how metrics such as inflation and GDP are worked out.`,
    },
    example2: {
      title: "Take Control of the Financial System",
      text: `Find out how money flows between banks and financial institutions using interactive
      tools and analysis.`,
    },
  };

  return (
    <Box style={{ width: "100%", overflow: "hidden" }}>
      <Box mt={100}></Box>
      <HeroTitle />
      <Box mt={100}></Box>
      <Box
        style={{
          background: colors.background1,
          height: "100vh",
        }}
      >
        <Example
          title={examples.example1.title}
          body={examples.example1.text}
          image={example2}
          direction="right"
        />
        <div style={{ height: "100px" }} />
        <Example
          title={examples.example2.title}
          body={examples.example2.text}
          image={example1}
          direction="left"
        />
      </Box>

      <Box mt={250}></Box>
      <HeroSubTitle />
      <Box
        style={{
          background: `url(/basquiat-graph.png) center / cover`,
          height: "200vh",
          width: "100%",
        }}
        className="hero-headline"
      />
    </Box>
  );
}
