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
              FTX, a hugely valuable crypto-currency exchange filed for
              bankruptcy in November 2022. The CEO of this company lost 90% of
              his value overnight. Fortunately for him he was left with 10% of
              his former wealth, amounting to almost a billion dollars.
              Thousands of customers and traders were not so lucky, unable to
              access their crypto-wallets or seeing their money disappearing
              into thin air, supposedly siphoned by anonymous hackers.{" "}
            </p>
            <p style={{ marginTop: 25 }}>
              In the same month the UK government announced a budget that ended
              up sending the country into financial meltdown, leaving families
              hoping to buy their first homes in limbo thanks to sky high
              mortgage rates.
            </p>

            <p style={{ marginTop: 25 }}>
              Social media and the news media do not leave us any wiser as to
              how these disasters occur, what is going on behind the scenes and
              how everyday people can protect themselves from scams or bad
              policies. One of the reasons for this is the lack of basic
              information about the mechanics of money, banking, finance and the
              economy. While there are helpful sites out there, Art of Banking
              aims to demistify the language of finance and economics so people
              can visualise the system that we are all a part of and develop an
              intuition about how everything works under the hood. There is no
              intellectual barrier to entry if you want to learn as much as
              possible about money.
            </p>
            <p style={{ marginTop: 25 }}>
              Art of Banking also aims to generate discussion about economic
              concepts from all schools of thought as well as dive into the
              history of money. This site takes an empiricist approach to
              economics rather than an ideological one. This site is open to
              anyone wishing to contribute articles, lessons or discussions.
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
              FTX, a hugely valuable crypto-currency exchange filed for
              bankruptcy in November 2022. The CEO of this company lost 90% of
              his value overnight. Fortunately for him he was left with 10% of
              his former wealth, amounting to almost a billion dollars.
              Thousands of customers and traders were not so lucky, unable to
              access their crypto-wallets or seeing their money disappearing
              into thin air, supposedly siphoned by anonymous hackers.{" "}
            </p>
            <p style={{ marginTop: 25 }}>
              In the same month the UK government announced a budget that ended
              up sending the country into financial meltdown, leaving families
              hoping to buy their first homes in limbo thanks to sky high
              mortgage rates.
            </p>

            <p style={{ marginTop: 25 }}>
              Social media and the news media do not leave us any wiser as to
              how these disasters occur, what is going on behind the scenes and
              how everyday people can protect themselves from scams or bad
              policies. One of the reasons for this is the lack of basic
              information about the mechanics of money, banking, finance and the
              economy. While there are helpful sites out there, Art of Banking
              aims to demistify the language of finance and economics so people
              can visualise the system that we are all a part of and develop an
              intuition about how everything works under the hood. There is no
              intellectual barrier to entry if you want to learn as much as
              possible about money.
            </p>
            <p style={{ marginTop: 25 }}>
              Art of Banking also aims to generate discussion about economic
              concepts from all schools of thought as well as dive into the
              history of money. This site takes an empiricist approach to
              economics rather than an ideological one. This site is open to
              anyone wishing to contribute articles, lessons or discussions.
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
