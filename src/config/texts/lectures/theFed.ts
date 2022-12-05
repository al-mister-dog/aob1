export const theFedText = {
  step1: {
    lectureTitle: `The Fed`,
    title: `The Fed: Final Settlement`,
    paragraphs: [
      `We have started to comprehend how the banking system is composed of many banks that pretend to be part of one large bank. This is because a healthy bank is able to fulfill its daily obligations, and to ensure this, it is essential that all other banks can do the same. The Clearing House system was introduced to guarantee that banks could meet their daily needs by creating a system in which all debts are owed to the Clearing House and not any individual bank. However, this system can be easily undermined since the Clearing House is ultimately responsible for its members with a limited resource.`,
      `The Federal Reserve has the legal authority to create its own liabilities, theoretically meaning it can not run out of money. This makes it easier to facilitate the national interbank payment system. Nonetheless, this does not mean that discipline is not still necessary. The Fed does not provide money without consequences; banks can overdraft with the Fed, but this comes with fees and other associated penalties. To avoid overdrafting, banks will seek loans in the Fed Funds Market to cover their day-to-day operations.`,
      `The Fed Funds Market is a system of loans and payments between banks in the federal banking system, and the money is passed between banks in the form of Fed Funds reserves. Lending and borrowing is based on the money each bank has in its account at the fed. This system of lending and borrowing is effectively the expansion and contraction of credit based on the money held on the Federal Reserve's balance sheet. Understanding how the Federal Funds Market works is important in order to gain insight into how banking operates.
      `,
    ],
    assignment: `Sources: Stigum's Money Market - Marcia Stigum: The Federal Funds Market since the Financial Crisis - Ben Craig: New York Fed - Domestic Market Operations`,
    sources: [
      {
        author: "Marcia Stigum",
        title: "Stigum's Money Market",
        link: "https://www.goodreads.com/book/show/1889541.Stigum_s_Money_Market",
      },
      {
        author: "Ben Craig",
        title: "The Federal Funds Market since the Financial Crisis",
        link: "https://www.clevelandfed.org/publications/economic-commentary/2017/ec-201707-the-federal-funds-market-since-the-financial-crisis",
      },
      {
        author: "New York Fed",
        title: "Domestic Market Operations",
        link: "https://www.newyorkfed.org/markets/domestic-market-operations",
      },
    ],
  },

  step2: {
    lectureTitle: `The Fed`,
    title: `Daylight Overdrafts`,
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
    lectureTitle: `Fed Funds`,
    title: `The Fed Funds Market`,
    paragraphs: [
      `How does a bank obtain a loan to settle a daylight overdraft with the Fed?`,
      `A bank looking to borrow or loan out reserves in the Federal Reserve System can do so through the 'Fed Funds Market'. In this market, banks have the option to either loan reserves or borrow reserves, which can be used as payment towards settling overdrafts with the Fed. This payment can be made immediately. When Bank B lends to Bank A, Bank B is providing reserves, however, the loan appears as 'Fed Funds' in Bank B's assets and Bank A's liabilities. Fed Funds are a form of credit, meaning Bank A promises to pay the loan back the next day. Fed Funds are used to settle payments between banks, but are not the liability or asset of the Fed.
      `,
      `In the previous example we saw that Bank 1 went into its daylight overdraft in order to make a payment. When Bank 1 went into its daylight overdraft, the credit at the Federal Reserve expanded. This allowed Bank 1 to make a payment. To pay off the overdraft, Bank 1 then took out a loan with another bank. As a result, the credit at the Federal Reserve contracted. However, the credit between the lender and loanee bank remained; this is called the expansion of private credit. Private credit gives banks financial flexibility, but it can expand so much that it can lead to a financial crisis or crash. `,
      `The Federal Reserve  uses the Federal Funds Rate to anticipate and adjust for this. In the UK, this is equivalent to the Bank Rate or Interest Rate. The rate is set by the Federal Open Market Committee (FOMC) and can be increased to discourage banks from making risky investments, or decreased during recessions to encourage lending and payments that will stimulate the economy. When the Fed Funds Rate is high, banks may be discouraged from borrowing from other banks, as the interest on that loan will be higher.`,
    ],
    assignment: `Get the banks to offer loans, enter into overdrafts, and process payments. This should be done only after customers have completed their transfers. The Federal Funds Rate should be adjusted as needed. Would customers take out a loan if that was the interest rate?`,
  },
  step4: {
    lectureTitle: `The Fed`,
    title: `Funding a Mortgage`,
    paragraphs: [
      `Banks use the Federal Funds market to obtain the funding needed to provide mortgage loans for their customers who are buying property. Imagine that John purchases a property from Jane by taking out a mortgage loan from Citibank. John and Citibank exchange IOUs, with Citibank promising deposits to John for the purchase and John promising to pay off the loan over a certain number of years (a mortgage). With those deposits, John then transfers the money to Jane and receives the deeds of Jane's property.`,
      `When making these transfers, there is a complex process that happens behind the scenes. For example, if Citibank doesn't have enough deposits to cover John's transfer, it will need to obtain a loan from another bank such as HSBC. Once the reserves have been transferred to Citibank's account, the money can be transferred to Jane's bank account at Chase. This process is closely supervised, so it is not possible for someone to take advantage of this system and steal the money.`,
      `At the start of the day, if HSBC did not have the reserves needed to lend to Citibank, it could acquire them by borrowing from Chase. In this strange situation, John's bank could have used Janes's bank's own reserves to buy her house! Such is the art of banking.`,
      `HSBC is playing a facilitating role in this transaction as the Dealer between two banks. This role, called the Dealer Function, involves HSBC buying and selling money to enable the payment. We'll be exploring the Dealer Function more in upcoming lessons.`,
    ],
    assignment: `John has taken out a mortgage loan with Citibank to pay Jane for a house. To ensure that the transaction is successful, get John to transfer funds from HSBC to Jane's bank account with Chase. For additional security, HSBC should acquire funds from Chase before lending to Citibank. Finally, can you find a way of contracting the credit after the transfer has been completed?`,
  },
  step5: {
    lectureTitle: `The Fed`,
    title: `Fed Funds Rate`,
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
    lectureTitle: `The Fed`,
    title: `Fed Funds Rate: Target`,
    paragraphs: [
      `If a bank is lending more money than it is borrowing, it is at risk of losing a lot of money if the investments fail. This risk is referred to as exposure. To limit its exposure, the bank can raise the interest rates on its loans in order to deter investors. Alternatively, if a bank is borrowing more than it is lending, it can attract more investors by offering loans at a lower interest rate. In light of this we can say that the Fed Funds Rate is a market rate.`,
      `What role does the Federal Reserve play in this? It is common to hear that the Federal Reserve 'sets the interest rate'. But the Federal Reserve does not directly participate in the Fed Funds Market; instead, it sets a target interest rate that it influences by controlling the quantity of reserves in the banking system. This, in turn, affects the amount of credit expansion in the market.`,
      `
      The Federal Reserve can control the money supply by engaging in open-market operations, such as participating in the Repo market (which will be discussed in the next chapter). As an example, the Federal Reserve can buy Treasury Bills, which are promises from the government to pay out cash at a future date. The Treasury Bills cannot be used for immediate spending, but will have gained interest when they mature. This makes Treasury Bills a low-risk investment.`,
      `The Federal Reserve can increase overall reserves in the banking system by purchasing Treasury Bills from other banks. This injects more reserves into the system, encouraging banks to invest, and thus lowering their interest rates. Conversely, when reserves are removed from the system, banks become discouraged from lending, resulting in higher interest rates. `,
      `
      To conclude this chapter, it is important to note that these loans are unsecured and therefore there is no guarantee that a bank will get back the reserves they lent out. In the following chapter, we will discuss Repurchase Agreement Loans (Repos) which involve the exchange of Fed Funds and Treasury Bill Securities as collateral. Repos are a significant component of the global money supply and are essential to understanding money and banking.
    `,
    ],
    assignment: `
    Use the purchase and sale of Treasury bills to affect the amount of reserves in the system. Currently, this website does not have the capability to make decisions on interest rate targeting; it is up to the user to decide whether or not to increase the interest rate. In subsequent chapters, banks will be able to autonomously decide whether or not to approve loans.`,
  },
};
