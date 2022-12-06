export const reposText = {
  step1: {
    lectureTitle: `Repos`,
    title: `Repos: Postponing Settlement`,
    paragraphs: [
      `We have seen that banks can borrow from other banks overnight using the fed funds system, but there is no assurance that these loans will be repaid. To improve the security of the lending bank, it would be beneficial to require collateral for fed funds loans in case the borrower bank is unable to repay.`,
      `A repurchase agreement (repo) is a type of loan where reserves are lent and the borrower bank provides treasury securities as collateral in return.`,
      `The repo market is vast, with billions of repos traded daily. Let us explore further what this entails and which institutions are involved in repo market transactions.
        `,
    ],
    assignment: `Sources: Stigum's Money Market - Marcia Stigum: Reposeral Funds Market since the Financial Crisis - Ben Craig: New York Fed - Domestic Market Operations`,
    sources: [
      {
        author: "Marcia Stigum",
        title: "Stigum's Money Market",
        link: "https://www.goodreads.com/book/show/1889541.Stigum_s_Money_Market",
      },
      {
        author: "Brookings",
        title: "What is the repo market, and why does it matter?",
        link: "brookings.edu/blog/up-front/2020/01/28/what-is-the-repo-market-and-why-does-it-matter/",
      },
      {
        author: "PensionCraft",
        title: "Reverse Repo - Why Has it Spiked & What Does it Mean?",
        link: "https://www.youtube.com/watch?v=O0fSPO7AW7k&ab_channel=PensionCraft",
      },
    ],
  },

  step2: {
    lectureTitle: `Repos`,
    title: `Repo in Balance Sheets`,
    paragraphs: [
      `When customers from Bank A send money to customers of Bank B, the transfer happens between the Federal Reserve System and the bank, not between the banks themselves. Therefore, Bank B does not need to worry about whether Bank A's account has gone into overdraft. Bank B can be sure that the money was received directly from the Federal Reserve.`,
      `
        Most banks in America have deposit accounts at the Federal Reserve (Fed). The survival constraint states that cash inflows must be greater than or equal to cash outflows. As a result, banks must settle with the Fed by the end of the day and have a non-negative balance. To prevent payment delays, the Fed allows banks to have an overdraft during the day. This enables banks to make payments without bouncing checks. At the end of the day, the overdraft must be repaid or else the Fed charges an extra fee (typically 100 basis points over the interest rate).
        `,
      `To avoid this, banks will try to get loans from other banks in order to pay off overdrafts. For a bank to lend to another, the lender must possess an extra amount of reserves in their own account. These loans accrue interest but typically at a lower rate than the Fed Funds Rate, which is advantageous for both banks. The borrower can settle their accounts without incurring overdraft fees, while the lender can make a profit by lending out their idle reserves.`,
    ],
    assignment: `Suppose Bank 1 needs to pay Bank 2 $10 (try it out). This would cause Bank 1 to have an overdraft with the Federal Reserve. To resolve this, Bank 1 should first take out a loan from Bank 2 and then use the loan to pay the Federal Reserve. Be sure to observe the credit graph and the payments that are represented by different colors. What would happen if the order of payments was reversed, i.e. taking out a loan from Bank 2 and then transferring the funds to Bank 2? At this stage in the lecture, Bank Deposits and reserves are the same thing to commercial banks.`,
  },
  step3: {
    lectureTitle: `Repos`,
    title: `Comparison with Fed Funds`,
    paragraphs: [
      `How does a bank obtain a loan to settle a daylight overdraft with the Fed?`,
      `A bank looking to borrow or loan out reserves in the Federal Reserve System can do so through the 'Fed Funds Market'. In this market, banks have the option to either loan reserves or borrow reserves, which can be used as payment towards settling overdrafts with the Fed. This payment can be made immediately. When Bank B lends to Bank A, Bank B is providing reserves, however, the loan appears as 'Fed Funds' in Bank B's assets and Bank A's liabilities. Fed Funds are a form of credit, meaning Bank A promises to pay the loan back the next day. Fed Funds are used to settle payments between banks, but are not the liability or asset of the Fed.
        `,
      `In the previous example we saw that Bank 1 went into its daylight overdraft in order to make a payment. When Bank 1 went into its daylight overdraft, the credit at the Federal Reserve expanded. This allowed Bank 1 to make a payment. To pay off the overdraft, Bank 1 then took out a loan with another bank. As a result, the credit at the Federal Reserve contracted. However, the credit between the lender and loanee bank remained; this is called the expansion of private credit. Private credit gives banks financial flexibility, but it can expand so much that it can lead to a financial crisis or crash. `,
      `Reposeral Reserve  uses the Federal Funds Rate to anticipate and adjust for this. In the UK, this is equivalent to the Bank Rate or Interest Rate. The rate is set by the Federal Open Market Committee (FOMC) and can be increased to discourage banks from making risky investments, or decreased during recessions to encourage lending and payments that will stimulate the economy. When the Fed Funds Rate is high, banks may be discouraged from borrowing from other banks, as the interest on that loan will be higher.`,
    ],
    assignment: `Get the banks to offer loans, enter into overdrafts, and process payments. This should be done only after customers have completed their transfers. Reposeral Funds Rate should be adjusted as needed. Would customers take out a loan if that was the interest rate?`,
  },
  step4: {
    lectureTitle: `Repos`,
    title: `Legal Construction of Repo`,
    paragraphs: [
      `Banks use the Federal Funds market to obtain the funding needed to provide mortgage loans for their customers who are buying property. Imagine that John purchases a property from Jane by taking out a mortgage loan from Citibank. John and Citibank exchange IOUs, with Citibank promising deposits to John for the purchase and John promising to pay off the loan over a certain number of years (a mortgage). With those deposits, John then transfers the money to Jane and receives the deeds of Jane's property.`,
      `When making these transfers, there is a complex process that happens behind the scenes. For example, if Citibank doesn't have enough deposits to cover John's transfer, it will need to obtain a loan from another bank such as HSBC. Once the reserves have been transferred to Citibank's account, the money can be transferred to Jane's bank account at Chase. This process is closely supervised, so it is not possible for someone to take advantage of this system and steal the money.`,
      `At the start of the day, if HSBC did not have the reserves needed to lend to Citibank, it could acquire them by borrowing from Chase. In this strange situation, John's bank could have used Janes's bank's own reserves to buy her house! Such is the art of banking.`,
      `HSBC is playing a facilitating role in this transaction as the Dealer between two banks. This role, called the Dealer Function, involves HSBC buying and selling money to enable the payment. We'll be exploring the Dealer Function more in upcoming lessons.`,
    ],
    assignment: `John has taken out a mortgage loan with Citibank to pay Jane for a house. To ensure that the transaction is successful, get John to transfer funds from HSBC to Jane's bank account with Chase. For additional security, HSBC should acquire funds from Chase before lending to Citibank. Finally, can you find a way of contracting the credit after the transfer has been completed?`,
  },
  step5: {
    lectureTitle: `Repos`,
    title: `Security Dealers`,
    paragraphs: [
      `We have been trading fed funds between banks and possibly setting their interest rate. Now, we will examine the broader context of these interest rates. This will help us understand the other roles that the Federal Reserve plays beyond just facilitating payments between banks.`,
      `The interest rate of a fed funds loan is determined through open market negotiations between borrower and lender banks. When two banks agree on a rate, it is based on factors such as the size of the borrower bank's liabilities and the lender bank's willingness to lend or its need to reduce excess reserves. If the borrower bank has high exposure, the lender bank may increase the interest rate offered. Conversely, if the lender bank is confident in the borrower bank's business, it may offer a lower rate.`,
      `The Effective Federal Funds Rate (EFFR) is calculated by finding the volume-weighted median rate of all fed funds loans traded between banks. This rate is determined by taking the median of the interest rates of loans traded at the midpoint of the total money traded in a day. The St Louis Fed gives the following example...
      `,
      `"For example, assume that on a given day, $10 billion of federal funds transactions occurred at
       each of 5, 10, 15 and 20 basis points, and $60 billion occurred at 25 basis points. This represents 
       $100 billion of total volume. The median would be the rate at the ‘middle dollar’, or $50 billion, 
       which is 25 basis points in this example."`,
      `It is important to understand the Effective Federal Funds Rate for two reasons. Firstly, it helps us to assess the health of the banking system. A low EFFR may indicate that the economy is growing too quickly, and is at risk of inflation, whereas a high EFFR may suggest that the economy is slowing down and is in danger of recession. Secondly, it allows the Federal Reserve to gain an overview of the payment system, so that it can intervene in the market to restore balance. In the next chapter, we will explore how the Fed can adjust the EFFR by using the 'Target Rate'.`,
    ],
    assignment: `The chart below illustrates how fed funds transactions have occurred as given in the example from the St Louis Fed.  Trade fed funds between banks at various interest rates in order to adjust the EFFR.
      `,
  },
  step6: {
    lectureTitle: `Repos`,
    title: `Repo and the Fed`,
    paragraphs: [
      `If a bank is lending more money than it is borrowing, it is at risk of losing a lot of money if the investments fail. This risk is referred to as exposure. To limit its exposure, the bank can raise the interest rates on its loans in order to deter investors. Alternatively, if a bank is borrowing more than it is lending, it can attract more investors by offering loans at a lower interest rate. In light of this we can say that the Fed Funds Rate is a market rate.`,
      `What role does the Federal Reserve play in this? It is common to hear that the Federal Reserve 'sets the interest rate'. But the Federal Reserve does not directly participate in the Fed Funds Market; instead, it sets a target interest rate that it influences by controlling the quantity of reserves in the banking system. This, in turn, affects the amount of credit expansion in the market.`,
      `
        Reposeral Reserve can control the money supply by engaging in open-market operations, such as participating in the Repo market (which will be discussed in the next chapter). As an example, the Federal Reserve can buy Treasury Bills, which are promises from the government to pay out cash at a future date. The Treasury Bills cannot be used for immediate spending, but will have gained interest when they mature. This makes Treasury Bills a low-risk investment.`,
      `Reposeral Reserve can increase overall reserves in the banking system by purchasing Treasury Bills from other banks. This injects more reserves into the system, encouraging banks to invest, and thus lowering their interest rates. Conversely, when reserves are removed from the system, banks become discouraged from lending, resulting in higher interest rates. `,
      `
        To conclude this chapter, it is important to note that these loans are unsecured and therefore there is no guarantee that a bank will get back the reserves they lent out. In the following chapter, we will discuss Repurchase Agreement Loans (Repos) which involve the exchange of Fed Funds and Treasury Bill Securities as collateral. Repos are a significant component of the global money supply and are essential to understanding money and banking.
      `,
    ],
    assignment: `
      Use the purchase and sale of Treasury bills to affect the amount of reserves in the system. Currently, this website does not have the capability to make decisions on interest rate targeting; it is up to the user to decide whether or not to increase the interest rate. In subsequent chapters, banks will be able to autonomously decide whether or not to approve loans.`,
  },
};
