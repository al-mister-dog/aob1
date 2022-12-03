import { useState } from "react";
import { Box, Center, SimpleGrid, useMantineTheme } from "@mantine/core";

import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import ArticleText from "../../../../shared-ui/texts/Article-Text";
import Caption from "../../../../shared-ui/texts/Caption";
import { inflationByYear, cpiData, getCpi } from "./calculator";
import Change from "./charts/change";
import ChangeDynamic from "./charts/change-dynamic";
import Rate from "./charts/rate";
import RateDynamic from "./charts/rate-dynamic";
import CpiPrice from "./cpi-price";
import CpiPriceWeight from "./cpi-price-weight";
import CpiWeight from "./cpi-weight";
import { pageTexts } from "../../../../../config/texts/articles/dictionary/inflation/cpi";

export default function CPI() {
  const [inflationRate, setInflationRate] = useState(inflationByYear);
  const [data, setData] = useState(cpiData);
  const theme = useMantineTheme();
  function onSubmitCpi(data) {
    const { newInflationByYear, newCpiData } = getCpi(data);
    setInflationRate(newInflationByYear);
    setData(newCpiData);
  }

  return (
    <>
      <Box ml={25} mt={200}>
        <Title>Consumer Price Index</Title>
      </Box>
      <Box
        mt={100}
        mb={50}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Change />
        <Rate />
      </Box>

      <Caption>
        Rate of change and inflation in the UK from 1999 to 2020. Source:{" "}
        <a
          href="https://www.rateinflation.com/consumer-price-index/uk-historical-cpi/"
          target="_blank"
          style={{ color: theme.colors.violet[9] }}
        >
          rateinflation.com
        </a>
      </Caption>
      <ArticleText>
        {pageTexts[0]}
      </ArticleText>
      <br></br>
      <ArticleText>
        {pageTexts[1]}
      </ArticleText>
      <br></br>
      <Center>
        <SubTitle>Price Change</SubTitle>
      </Center>
      <ArticleText>
        {pageTexts[2]}
      </ArticleText>
      <Caption>Insert explanation of how to use widget</Caption>
      <CpiPrice />
      <br></br>
      <Center>
        <SubTitle>Cpi Weight</SubTitle>
      </Center>
      <ArticleText>
        {pageTexts[3]}
      </ArticleText>
      <Caption>Insert explanation of how to use widget</Caption>
      <CpiWeight />
      <ArticleText>
        {pageTexts[4]}
      </ArticleText>
      <Caption>
        {pageTexts[5]}
      </Caption>

      <SimpleGrid cols={2}>
        <CpiPriceWeight
          setNewCpi={onSubmitCpi}
          cpiData={data}
          width="95%"
          margin="auto"
        />
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Box style={{ height: "20rem" }}>
            <ChangeDynamic data={inflationRate} />
          </Box>

          <Box mt={20} style={{ height: "20rem" }}>
            <RateDynamic data={inflationRate} />
          </Box>
        </Box>
      </SimpleGrid>

      <Box style={{ padding: "50px" }}></Box>
    </>
  );
}
