import { useAppSelector } from "../../../../../app/hooks";
import {
  selectBankers,
  selectTraders,
} from "../../../../../features/renaissance/renaissanceSlice";
import { useMediaQuery } from "@mantine/hooks";
import { mediaQuery } from "../../../../../config/media-query";
import ArticlePageMobile from "../../../../../components/mobile/articles/historical/renaissance/bills-of-exchange/ArticlePage";
import ArticlePageDesktop from "../../../../../components/desktop/articles/historical/renaissance/bills-of-exchange/ArticlePage";

export const texts = {
  title: `Bills of Exchange and Units of Account`,
  paragraphs: [
    `If a merchant ships goods abroad and wants a swift payment then a problem emerges. 
        If they were to receive direct payment from the importer they would have to wait a 
        long time to receive their payment, or even worse the payment could get lost in 
        transport. Bills of exchange were a helpful tool for merchants in this case. The 
        merchant could simply write a bill with amount owed and who owes the amount, and then 
        go to the exchange bank and redeem the bill with amount owed for a local or preferred 
        currency. However the amount specified on the bill was not local currency but a special 
        unit of account.`,
    `In Western Europe during the 16th century the unit of account in
        exchange banking was called the ecu de marc (gold marc). This unit
        would be used for all bills of exchange regardless of country, and was
        then redeemed in local or preferred currencies. The exchange rate of
        the marc would depend on what was announced at the international
        exchange fairs. The fair would take place in the dominant financial
        center of the time. At the time of this exchange, the financial center
        was Lyons (France). Lyons could dicate the price of the marc in any
        currency being used in the network which covered much of Western
        Europe. At the time of this exchange, one marc was worth 64 ecus,
        another coin which would have been an ideal choice for a merchant in
        Florence.`,
    `Here we have three people; Me, a merchant from Florence, You, an
        exchange banker in Florence, and Salviati, a merchant from Lyons. In
        Davanzati's example I (me) ship 1 Marcs worth of goods to Salviati and
        and then sell my Bill to You for 64 ecus.`,
  ],
  assignment: `Assignment: Get Me to ship 1 marcs worth of goods to Salviati and
      receive payment from You. Click refresh to reset the board`,
};

export default function BillsOfExchange() {
  const { me, Salviati } = useAppSelector(selectTraders);
  const { you } = useAppSelector(selectBankers);

  const FlorencePlayers = [me, you];
  const LyonsPlayers = [Salviati];
  const isMobile = useMediaQuery(mediaQuery);
  return isMobile ? (
    <ArticlePageMobile
      path="remitting-bills"
      linkTitle="Remitting Bills"
      texts={texts}
      FlorencePlayers={FlorencePlayers}
      LyonsPlayers={LyonsPlayers}
    />
  ) : (
    <ArticlePageDesktop
      path="remitting-bills"
      linkTitle="Remitting Bills"
      texts={texts}
      FlorencePlayers={FlorencePlayers}
      LyonsPlayers={LyonsPlayers}
    />
  );
}
