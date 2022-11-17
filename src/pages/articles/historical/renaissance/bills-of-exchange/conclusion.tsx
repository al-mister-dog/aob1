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
  title: `Conclusion`,
  paragraphs: [
    `Davanzati's exchange has been completed (history has repeated itself). 'You' have 
        managed to get around usury laws and turn a profit on exchanging bills. The next step 
        would be for 'You' and Tomasso to share their spoils, most likely through corresponding
        (nostro-vostro) accounts. Correspondent banking is explained in another module on this course.`,
    `However, this particular set of exchanges is not the only way to turn a profit. Can you
        figure any other ways to make a profit through the art of sixteenth century exchange banking?`,
  ],
  assignment: `Assignment: Go through Davanzati's example again or try some different exchanges out.
      You can toggle the certainty quotes (altering the network hierarchy) or alter the echange rates. 
      Then move on to the next module in the course.`,
};

export default function RemittingBills() {
  const { me, salviati, federigo, piero } = useAppSelector(selectTraders);
  const { you, tomasso } = useAppSelector(selectBankers);

  const florencePlayers = [me, you, federigo];
  const lyonsPlayers = [salviati, tomasso, piero];

  const isMobile = useMediaQuery(mediaQuery);

  return isMobile ? (
    <ArticlePageMobile
      path="conclusion"
      linkTitle="Conclusion"
      texts={texts}
      florencePlayers={florencePlayers}
      lyonsPlayers={lyonsPlayers}
    />
  ) : (
    <ArticlePageDesktop
      path="/lectures/towards-a-central-bank/correspondent-banking"
      linkTitle="Learn More About Correspondent Banking"
      texts={texts}
      florencePlayers={florencePlayers}
      lyonsPlayers={lyonsPlayers}
    />
  );
}
