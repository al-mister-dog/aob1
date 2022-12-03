export const clearinghouseText = {
  step1: {
    lectureTitle: `Clearing House`,
    title: `The Clearing House: Towards a Central Bank`,
    paragraphs: [
      `The Federal Reserve, a central bank, is often portrayed as a mysterious and sometimes sinister entity. However, it was created to address the banking issues that the United States has faced since its founding. This module aims to provide clarity on these fundamental banking problems and how a central bank can help to solve them.`,
      `We will examine a model of a network of unconnected banks to analyze the evolution of accounting innovations from the 19th century to the Federal Reserve Act of 1913. This progress culminated with the New York Clearing House Association in 1853, which was dominated by JP Morgan.`,
    ],
    assignment: `Sources: CF Dunbar - Chapters on the Theory and History of Banking: Christopher Hoag - Clearinghouse loan certificates as interbank loans in the United States, 1860–1913: 
    James Graham Cannon - Clearing House Loan Certificates and Substitutes for Money Used During the Panic of 1907`,
    sources: [
      {
        author: "CF Dunbar",
        title: "Chapters on the Theory and History of Banking",
        link: "https://d396qusza40orc.cloudfront.net/money/readings/Dunbar.pdf",
      },
      {
        author: "Christopher Hoag",
        title:
          "Clearinghouse Loan Certificates as Interbank Loans in the United States, 1860-13",
        link: "https://www.cambridge.org/core/journals/financial-history-review/article/clearinghouse-loan-certificates-as-interbank-loans-in-the-united-states-18601913/761D544D65E48CC0CB9A9C395DD362DA",
      },
      {
        author: "James Graham Cannon",
        title:
          "Clearing House Loan Certificates and Substitutes for Money Used During the Panic of 1907",
        link: "https://fraser.stlouisfed.org/files/docs/publications/books/cannon_clearing_house_loans_1910.pdf",
      },
    ],
  },

  step2: {
    lectureTitle: `Clearing House`,
    title: `One Big Bank`,
    paragraphs: [
      `If there were only one bank with all customers having an account, the quantity of money would be the total amount of deposits in the bank. When customers make payments between each other, the liabilities side of the bank's balance sheet would increase or decrease accordingly, while the reserves would remain constant.`,
      `If this bank allowed overdrafts, it would result in negative accounts appearing on the assets side of its balance sheet. When a customer with a negative account pays a customer with a positive account, both sides of the bank's balance sheet would increase. Conversely, when a customer with a positive account pays a customer with a negative account, both sides of the balance sheet would decrease.`,
      `The quantity of money can be measured in three ways when using bank credit as a form of payment: 1) the total of deposits held in positive accounts; 2) the difference between positive accounts and overdrafts; and 3) all deposits, regardless of whether they are positive or negative. This raises questions about how to accurately measure the quantity of money.`,
    ],
    assignment: `For four customers belonging to the same bank, analyze how payments between customers with both positive and negative accounts affect the balance sheet. How many types of transactions exist in this system?`,
  },
  step3: {
    lectureTitle: `Clearing House`,
    title: `Multiple Banks`,
    paragraphs: [
      `In reality, there are many banks, not just one. If a customer from Bank 1 pays a customer from Bank 2, Bank 1's liabilities decrease and Bank 2's liabilities increase, but Bank 2 hasn't received any money in return. This creates a problem of how to settle payments between the banks.`,
      `During the first half of the 19th century in America, when a bank received a cheque from a customer of another bank, they would tally up the cheques at the end of the day or week and issue a bill demanding payment from that bank. In turn, they would receive bills demanding payment from other banks to which customers of this bank had made transfers. To move reserves between banks, each bank would employ a porter, who ran the risk of making honest or dishonest mistakes in payments.`,
      `Dues are payments between banks that appear on both sides of a bank's balance sheet. They are similar to deposits or overdrafts, representing money that one bank owes to the other. When payments are settled, these dues are cleared from the balance sheets, and the money is transferred to each bank's reserves. In the next step, we will examine a better way of handling payments between banks.`,
    ],
    assignment: `Two banks each have two customers with $50 in their accounts. Each customer will make payments to the other customer. Make note of the money that is due to and due from each bank in their balance sheets. Also note where the money goes once the payments between the banks have been settled.`,
  },
  step4: {
    lectureTitle: `Clearing House`,
    title: `Correspondent Banking`,
    paragraphs: [
      `Rather than transferring reserves for each payment transaction, suppose that each day each bank records the payments they owe to other banks and receive from other banks. The payments are calculated by subtracting the amount owed (“due tos”) from the amount received (“due froms”). At the end of the day, the payments are netted; for example, if Bank 1 owes Bank 2 $50 and Bank 2 owes Bank 1 $50, the net will be zero. If Bank 1 owes Bank 2 $50 and Bank 2 owes Bank 1 $30, the net will be $20 owed to Bank 2.`,
      `Rather than settling payments in gold or cash, banks can instead maintain correspondent accounts with each other. These accounts are essentially a trade of IOUs, in which Bank 1 owes Bank 2 and Bank 2 owes Bank 1. When Bank 1 needs to pay Bank 2, they can draw on the balance held at Bank 2 or increase the balance held at Bank 1 in Bank 2's favour. `,
      `When Bank 1 owes Bank 2 money, Bank 1 can either reduce Bank 2's liabilities to Bank 1 and its own assets from Bank 2, or increase Bank 2's assets from Bank 1 and its own liabilities to Bank 2. In the former case, total deposits will decrease (debiting), and in the latter case, total deposits will increase (crediting). Generally, the bigger, more central bank will be credited by the smaller, less central bank.`,
      `The introduction of correspondent banking enabled banks to move away from a money-based payment system and instead use a credit-based system. This means that banks are no longer limited by the amount of gold in their possession, but rather by the credit limits set between them. At the end of the day, banks can use book entries to settle net payments between them. In the next step, we will explore an even better solution.`,
    ],
    assignment: `There are two banks, each with two customers who have made various transfers. Calculate the net payments between the two banks and settle the difference using the corresponding bank accounts, which contain "Bank Deposits".`,
  },
  step5: {
    lectureTitle: `Clearing House`,
    title: `The Clearing House`,
    paragraphs: [
      `The correspondent banking system is an improvement from the previous interbank payment system, but it could be further refined. It would be more effective if all the banks held correspondent accounts with one single bank, and used these accounts for clearing all payments. This would mean that the bank only needs to pay the overall net, instead of paying each bank in the network bilaterally.`,
      `In the mid-nineteenth century, banks of similar size created the New York Clearing House Association. Each bank contributed to its reserves by subscribing to the association. Payments due to or from any one bank were treated as payments due to or from the Clearing House. These payments were made through "Clearing House Certificates", which were bank notes denominated in cash or gold. Each bank had a deposit account of Clearing House Certificates. At the end of each day, banks would meet at the Clearing House, calculate the net amount due to or from each bank, and either pay or receive Clearing House Certificates accordingly.`,
      `The deposit accounts of the member banks make up the total money supply in this system, meaning that the total amount of due-tos and due-froms will always equal zero and reserves will not have to be transferred. However, if one member bank in this system becomes a systematic debtor and runs out of certificates in their account, the system can collapse. To avoid this, the Clearing House established a loan system that functions as an overdraft. This will be discussed further in the next chapter.`,
    ],
    assignment: `Banks and customers who have completed a day of trading are ready to net and settle their dues with the clearinghouse, as shown in the charts below. After settling dues, check the banks' certificate accounts to track the results. If you get confused along the way, use the refresh button in the settings panel to start over.`,
  },
  step6: {
    lectureTitle: `Clearing House`,
    title: `Clearing House Loans`,
    paragraphs: [
      `The Clearing House allows banks to settle their accounts with each other by netting all their claims and obligations. The cumulative reserves of all banks are held at one big bank. This ensures that any debts of a net debtor bank are always covered, as the total amount of the Clearing House bank is greater than any single bank's reserves.`,
      `In times of stress, such as a bank run or a withdrawal of funds from abroad, the total amount of money needed by member banks may be higher than the reserves of the Clearing House. In this case, the members can borrow from the Clearing House. The Clearinghouse issues a Clearinghouse Loan Certificate, which is backed by the loan instead of gold, and is secured by the collateral of any Debtor Bank.`,
      `Clearinghouse loan certificates are like banknotes, but they are backed by loans from member banks instead of special government bonds. Before 1907, it was unclear if they were legal. These certificates paid 6% interest, which made them attractive, but it was difficult for the Clearinghouse to get them back. The Clearinghouse does not provide overdrafts in the same way as a bank, as it requires any expansion of credit to be collateralized by its member banks. These loan certificates acted much like bank money and sparked debates about whether money is solely a creature of the state or not. In this lecture series, time has not yet been a factor, so debts do not accrue daily interest. However, in the next module, time will become a major consideration.`,
    ],
    assignment: `Can you identify which bank has debts that exceed the Clearing House reserves? In this case, any money that was previously accounted for in a 'clearinghouse overdraft' has been distributed among member banks in the form of Clearinghouse loan certificates.`,
  },
  step7: {
    lectureTitle: `Clearing House`,
    title: `Conclusion`,
    paragraphs: [``],
    assignment: `One bank has run debts that exceed the Clearing House reserves. Can you find out who? In this
    example, any money that would have previously been considered as part of a 'clearinghouse overdraft' has been allocated between
    member banks as Clearinghouse loan certificates`,
  },
};
