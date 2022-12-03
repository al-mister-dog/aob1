import { useState } from "react";
import { Box, Center, useMantineTheme } from "@mantine/core";
import { inflationByYear, cpiData, getCpi } from "./calculator";
import Change from "./charts/change";
import ChangeDynamic from "./charts/change-dynamic";
import Rate from "./charts/rate";
import RateDynamic from "./charts/rate-dynamic";
import CpiPrice from "./cpi-price";
import CpiPriceWeight from "./cpi-price-weight";
import CpiWeight from "./cpi-weight";
import Title from "../../../../shared-ui/texts/Title";
import SubTitle from "../../../../shared-ui/texts/Subtitle";
import ArticleText from "../../../../shared-ui/texts/Text-Mobile";
import Caption from "../../../../shared-ui/texts/Caption";
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
      <Box mt={200}>
        <Center>
          <Title>Consumer Price Index</Title>
        </Center>
      </Box>

      <Box mt={100} mb={50}>
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
      <ArticleText>{pageTexts[0]}</ArticleText>
      <br></br>
      <ArticleText>{pageTexts[1]}</ArticleText>
      <br></br>
      <Center>
        <SubTitle>Price Change</SubTitle>
      </Center>
      <ArticleText>{pageTexts[2]}</ArticleText>
      <Caption>Insert explanation of how to use widget</Caption>
      <CpiPrice />
      <br></br>
      <Center>
        <SubTitle>Cpi Weight</SubTitle>
      </Center>
      <ArticleText>{pageTexts[3]}</ArticleText>
      <Caption>Insert explanation of how to use widget</Caption>
      <CpiWeight />
      <ArticleText>{pageTexts[4]}</ArticleText>
      <Caption>{pageTexts[5]}</Caption>

      <>
        <CpiPriceWeight
          setNewCpi={onSubmitCpi}
          cpiData={data}
          width="100%"
          margin="auto"
        />
        <ChangeDynamic data={inflationRate} />

        <RateDynamic data={inflationRate} />
      </>

      <Box style={{ padding: "50px" }}></Box>
    </>
  );
}
