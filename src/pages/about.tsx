import { Box, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import pic from "../../public/picasso-bull-stockmarket-2.jpeg";
import { mediaQuery } from "../config/media-query";
import { useLoaded } from "../hooks/useLoaded";

export default function About() {
  const loaded = useLoaded();
  const isMobile = useMediaQuery(mediaQuery);
  if (loaded) {
    return isMobile ? (
      <Box mt={150}>
        <h1 style={{ textAlign: "center" }}>About Art of Banking</h1>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          mx={{ base: 5, md: 50 }}
        >
          <Box>
            <p style={{ marginTop: 0 }}>
              In November 2022, FTX, an incredibly valuable crypto-currency
              exchange, declared bankruptcy. This caused the CEO to lose 90% of
              his wealth instantly. Despite this, he was left with a billion
              dollars, constituting 10% of his original fortune. Unfortunately,
              thousands of customers and traders weren't as fortunate, unable to
              access their crypto-wallets or having their funds stolen by
              unidentified hackers.
            </p>
            <p style={{ marginTop: 25 }}>
              In the same month, the UK government announced a budget that had
              disastrous consequences, resulting in a financial meltdown and
              leaving aspiring homeowners unable to secure mortgages due to the
              high rates.
            </p>

            <p style={{ marginTop: 25 }}>
              Despite the lack of basic information available on social media
              and the news media, Art of Banking is striving to make
              understanding the language of finance and economics accessible to
              everyone. This will help people gain an understanding of how the
              economy and money system works, so they can protect themselves
              from scams or bad policies. There is no intellectual barrier to
              learning more about money, and Art of Banking is here to help.
            </p>
            <p style={{ marginTop: 25 }}>
              At Art of Banking, we believe in taking an empiricist approach to
              economics, rather than an ideological one. We want to invite
              contributions from all schools of thought and provide a platform
              for discussing economic concepts and the history of money. We
              welcome anyone who wishes to share their knowledge and contribute
              to the site.
            </p>
          </Box>
          <Box>
            <Image
              src={pic}
              height={380}
              width={380}
              alt="picasso style bull infront of a stock market graph"
            ></Image>
          </Box>
        </Flex>
      </Box>
    ) : (
      <Box mt={50} mb={50}>
        <h1 style={{ textAlign: "center" }}>About Art of Banking</h1>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          mx={{ base: 5, md: 50 }}
        >
          <Box style={{ maxWidth: 700 }}>
            <p style={{ marginTop: 0 }}>
              In November 2022, FTX, an incredibly valuable crypto-currency
              exchange, declared bankruptcy. This caused the CEO to lose 90% of
              his wealth instantly. Despite this, he was left with a billion
              dollars, constituting 10% of his original fortune. Unfortunately,
              thousands of customers and traders weren't as fortunate, unable to
              access their crypto-wallets or having their funds stolen by
              unidentified hackers.
            </p>
            <p style={{ marginTop: 25 }}>
              In the same month, the UK government announced a budget that had
              disastrous consequences, resulting in a financial meltdown and
              leaving aspiring homeowners unable to secure mortgages due to the
              high rates.
            </p>

            <p style={{ marginTop: 25 }}>
              Despite the lack of basic information available on social media
              and the news media, Art of Banking is striving to make
              understanding the language of finance and economics accessible to
              everyone. This will help people gain an understanding of how the
              economy and money system works, so they can protect themselves
              from scams or bad policies. There is no intellectual barrier to
              learning more about money, and Art of Banking is here to help.
            </p>
            <p style={{ marginTop: 25 }}>
              At Art of Banking, we believe in taking an empiricist approach to
              economics, rather than an ideological one. We want to invite
              contributions from all schools of thought and provide a platform
              for discussing economic concepts and the history of money. We
              welcome anyone who wishes to share their knowledge and contribute
              to the site.
            </p>
          </Box>
          <Box>
            <Image
              src={pic}
              height={500}
              width={500}
              alt="picasso style bull infront of a stock market graph"
            ></Image>
          </Box>
        </Flex>
      </Box>
    );
  }
}
