import { Box, useMantineTheme } from "@mantine/core";

import Link from "next/link";
import Title from "../../../../../shared-ui/texts/Title";

import ArticleText from "../../../../../shared-ui/texts/Article-Text";
import SubTitle from "../../../texts/Subtitle";
import Source from "../../../../../shared-ui/texts/Source";
export const texts = {
  lectureTitle: "Renaissance Banking",
  title: `The Enrichment of Exchange Bankers`,
  paragraphs: [
    `This module explains how the exchange bankers of the 16th century 
        were able to make profits from bills of exchange. A bill of exchange 
        is a written order used primarily in international trade that binds 
        one party to pay a fixed sum of money to another party on demand or at 
        a predetermined date, similar to a cheque. Merchant traders importing 
        and exporting goods abroad would use bills of exchange as a safe alternative 
        to shipping payment in specie (coins or precious metal). They could simply 
        hand over the bill of exchange to their local exchange banker and receive 
        payment in return. The exchange banker would then draw the bill onto the 
        party that owes the money, and the transaction is completed.`,
    `Given the fact that bills of exchange appear to be simply cheques, as well
        as the fact that in Catholic Europe a banker was not allowed to make a profit 
        from the changing of money, what was the incentive for these exchange bankers 
        to deal in bills of exchange? The truth is that the exchange bankers could indeed
        profit from bills of exchange, but through a complex series of transactions, involving
        associate bankers, other traders and a hierarchical system of exchange rates. 
        The 16th century Italian economist Bernardo Davanziti details one such account in his book 
        Notizia de Cambi, involving bankers and traders from Florence and Lyons.`,
    `Lets go through step by step this series of transactions and learn how we could also 
        side step usury laws and make a neat profit from the art of exchange banking...`,
  ],
  assignment: `Sources: Notizia de Cambi - Bernardo Davanzati, 
      Private Money, Public Currencies - Xambeu et al, Medieval Monetary Theory - Colin Drumm`,
};

export default function Intro() {
  const theme = useMantineTheme();
  return (
    <>
      <Box ml={25} mt={200}>
        <Title>{texts.title}</Title>
      </Box>
      <Box pl={30}>
        <Source>Sources: </Source>
        <Source>
          <a
            href="https://www.youtube.com/watch?v=G4fAZzyICZA&ab_channel=ColinDrumm"
            target="_blank"
            style={{ color: theme.colors.cyan[9] }}
          >
            Medieval Monetary Theory - Colin Drumm,{" "}
          </a>
        </Source>
        <Source>
          <a
            href="https://books.google.co.uk/books?id=zpJCWAQCumIC&pg=PA66&source=gbs_toc_r&cad=4#v=onepage&q=davanzati&f=false"
            target="_blank"
            style={{ color: theme.colors.cyan[9] }}
          >
            Private Money, Public Currencies - Xambeu et al,{" "}
          </a>
        </Source>
        <Source>
          <a
            href="https://books.google.co.uk/books?id=lrIvAAAAYAAJ&pg=PA15&redir_esc=y#v=onepage&q&f=false"
            target="_blank"
            style={{ color: theme.colors.cyan[9] }}
          >
            Notizia de Cambi - Bernardo Davanzati
          </a>
        </Source>
      </Box>

      <ArticleText>
        This article series explains how the exchange bankers of the 16th
        century were able to make profits from bills of exchange. A bill of
        exchange is a written order used primarily in international trade that
        binds one party to pay a fixed sum of money to another party on demand
        or at a predetermined date, similar to a cheque. Merchant traders
        importing and exporting goods abroad would use bills of exchange as a
        safe alternative to shipping payment in specie (coins or precious
        metal). They could simply hand over the bill of exchange to their local
        exchange banker and receive payment in return. The exchange banker would
        then draw the bill onto the party that owes the money, and the
        transaction is completed.
      </ArticleText>
      <ArticleText>
        Given the fact that bills of exchange appear to be simply cheques, as
        well as the fact that in Catholic Europe a banker was not allowed to
        make a profit from the changing of money, what was the incentive for
        these exchange bankers to deal in bills of exchange? The truth is that
        the exchange bankers could indeed profit from bills of exchange, but
        through a complex series of transactions, involving associate bankers,
        other traders and a hierarchical system of exchange rates. The 16th
        century Italian economist Bernardo Davanziti details one such account in
        his book Notizia de Cambi, involving bankers and traders from Florence
        and Lyons. In this book, Davanzati places himself in the role of a
        merchant trader, and advises an exchange banker on how to take advantage
        of the foreign exchange system to profit from a bill of exchange...
      </ArticleText>
      <p style={{ paddingRight: "50px", paddingLeft: "50px" }}>
        "If you (A) have money in Florence and want to transfer it Lyons,
        because you can make a profitable return exchange, give me (B), who need
        money, 64 ecus in Florence, when the exchange rate reaches this level,
        in exchange of which I promise to have a gold marc paid to Tommaso
        Sertini in Lyons. I give you a bill of exchange drawn on Salviati (C),
        you send it to Tommaso (D) to cash it and use it at its best advantage
        for a return exchange. The consignment letter is called "notification"
        or <span style={{ fontStyle: "italic" }}>spaccio</span>. Tommaso (D)
        will obey your orders, he will pay your gold marc to Piero (E) in Lyons
        and receive from him a bill of exchange drawn on Federigo (F) in
        Florence, on which the latter has to pay you (A) 65 and a half ecus in
        so many days. Tommaso will send you this exchange in return, and when it
        falls due, you will have gained 1 ecu and a half. But you have to run
        the risk of three bankruptcies, mine, Tommaso's and Piero's. So you will
        have to search with Argus eyes to whom you can give money to exchange at
        the greatest advantage, to whom you can hand over your bill and through
        whome the return exchange will be carried out... The person who does not
        resort to the mediation of a banker should, once he has deducted the 1
        1/2 percent local charges, gain an average of 8 percent interest a
        year."
      </p>
      <ArticleText>
        There's a lot going on here, so let's go through step by step this
        series of transactions and learn how we could also side step usury laws
        and make a neat profit from the art of exchange banking...`
      </ArticleText>

      <Box p={25}>
        <SubTitle>
          Go to{" "}
          <Link
            href="bills-of-exchange/bills-of-exchange-and-units-of-account"
            style={{ color: theme.colors.violet[9] }}
          >
            Bills of Exchange and Units of Account. . .
          </Link>
        </SubTitle>
      </Box>
    </>
  );
}
