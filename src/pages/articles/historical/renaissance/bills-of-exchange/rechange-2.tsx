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
  title: `Rechange: Part 2`,
  paragraphs: [
    `Tomasso now has a bill for 65.5 ecus in return for his gold marc. This is the first step of 
     the rechange. To turn this bill into cash Tomasso must remit the bill to 'You' in Florence, 
     who will draw the bill on Federigo for 65.5 ecus. The result of this is that 'You' will have
     made back the 64 ecus from the bill bought from 'Me' as well as having made 1.5 ecus profit.`,
    `In Catholic Europe, Usury laws prohibited making interest from loans. This also included 
     selling money for more than its stated price. This transaction circumvates usury laws because 
     in Lyons, the ecus were bought for the price stated in the conto. It just so happens that a 
     gold marc in Lyons will fetch more ecus than a gold marc in Florence. The exchange bankers often
     used this to their advantage using such transaction networks.`,
  ],
  assignment: `Assignment: Get Tomasso to remit the bill to 'You' and have 'You' draw the bill on
    Federigo in return for 65.5 ecus. Previous steps should have been completed. If they have not been 
    completed then go back to the beginning of this module. Click refresh to reset the board.`,
};

export default function RemittingBills() {
  const { me, Salviati, Federigo, Piero } = useAppSelector(selectTraders);
  const { you, Tommaso } = useAppSelector(selectBankers);

  const FlorencePlayers = [me, you, Federigo];
  const LyonsPlayers = [Salviati, Tommaso, Piero];

  const isMobile = useMediaQuery(mediaQuery);

  return isMobile ? (
    <ArticlePageMobile
      prevPath="rechange-1"
      prevLinkTitle="Rechange: Part 1"
      nextPath="conclusion"
      nextLinkTitle="Conclusion"
      texts={texts}
      FlorencePlayers={FlorencePlayers}
      LyonsPlayers={LyonsPlayers}
    />
  ) : (
    <ArticlePageDesktop
      prevPath="rechange-1"
      prevLinkTitle="Rechange: Part 1"
      nextPath="conclusion"
      nextLinkTitle="Conclusion"
      texts={texts}
      FlorencePlayers={FlorencePlayers}
      LyonsPlayers={LyonsPlayers}
    />
  );
}
