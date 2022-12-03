export const fundamentalsText = {
  step1: {
    lectureTitle: `fundamentals`,
    title: `Banking Fundamentals: Balance Sheets`,
    paragraphs: [
      `If you've read the Financial Times, you've likely been overwhelmed by the abundance of unfamiliar terms and graphs. It's not made-up language - it's just hard to understand. This chapter will explain the inner workings of banks and customers by walking you through a bank balance sheet and a customer balance sheet. You'll see how deposits, transfers, and overdrafts play out in the real world. Then, you'll gain an understanding of the practices between banks and other banks, practices that are often discussed in the Financial Times. By the end of the course, you should be able to read the paper without using a dictionary.`,
    ],
    assignment: `Sources: Allyn Young - The Mystery of Money: Money and Banking - Perry Mehrling`,
    sources: [
      {
        author: "Allyn Young",
        title: "The Mystery of Money",
        link: "https://d396qusza40orc.cloudfront.net/money/readings/Allyn%20Young.pdf",
      },
      {
        author: "Money and Banking",
        title: "Perry Mehrling",
        link: "https://www.youtube.com/playlist?list=PLSuwqsAnJMtwZEwkJgHZCod2xP9b7skF5",
      },
    ],
  },

  step2: {
    lectureTitle: `fundamentals`,
    title: `Balance Sheets and Bank Deposits`,
    paragraphs: [
      `A bank and a customer can be represented on a balance sheet with their assets and liabilities. Assets are displayed on the left side of the balance sheet and liabilities are displayed on the right side. For a bank, assets can include cash, investments, and loans. Liabilities can include deposits from customers, debt to other banks, and equity. For a customer, assets can include cash, investments, and real estate. Liabilities can include credit card debt, student loans, and mortgages.`,
      `A customer typically has two types of assets: cash reserves and deposits. Cash reserves include money in their wallet or other money they have on hand, which can be used instantly for purchases like groceries. Deposits are money kept in a bank, and while similar to cash, there are some key differences.`,
      `When you put cash into the bank, it does not belong to you anymore. Instead, the bank gives you a promise to pay you back in cash for the amount you deposited. This promise is a claim on the bank, and is a key concept to understand when exploring how money flows.`,
      `When you deposit money into a bank, it becomes an asset to you, but a liability to the bank. This is because the bank now owes you that money. This concept is known as double-entry bookkeeping. The bank then takes the money you give them and turns it into an asset. It is important to remember that there are more deposits than cash in circulation. If everyone at a bank wanted to take out their deposits, the bank would not have enough cash to cover them. This is part of fractional reserve banking, which is seen as a beneficial feature of banking.`,
    ],
    assignment: `Have Customer 1 deposit and withdraw cash into and from their bank account. Pay attention to the changes that appear on both the customer's and the bank's balance sheets. To reset balance sheets, select the refresh icon in the settings panel.`,
  },
  step3: {
    lectureTitle: `fundamentals`,
    title: `Deposit Transfers`,
    paragraphs: [
      `We have examined the distinction between cash and deposits. Deposits are the bank's liability and the customer's asset. Customers can transfer these deposits to another customer, meaning they transfer the right to claim cash money from the bank, rather than actual cash.`,
      `When a transfer takes place between two account holders at the same bank, the balances of the bank and the two customers change accordingly. For example, if both customers have $50 in their account and Customer One transfers $20 to Customer Two, Customer One's account balance decreases by $20, and Customer Two's account balance increases by $20. The bank's balance remains unchanged, as it still owes the same amount of deposits ($100 in this case). `,
      `The bank is content with this arrangement since it does not have to search for additional sources of money to honor its commitment to pay out. When considering transfers between customers with accounts at different banks, the complexity of the situation for both banks increases.`,
    ],
    assignment: `Two customers have $100 each to deposit into the bank. Observe the changes in the bank's balance sheet and the customers' accounts when they transfer their money to one another.`,
  },
  step4: {
    lectureTitle: `fundamentals`,
    title: `Credit and Overdrafts`,
    paragraphs: [
      `Deposit transfers are becoming increasingly popular as a form of payment for retail purchases, while cash-only shops are becoming increasingly rare. Cash and deposits are often thought of as interchangeable, but their differences become more apparent in certain situations.`,
      `If a customer only has $50 cash but wants to purchase a pair of shoes that costs $100, they would not be able to do so in a cash only economy. However, in a world with deposits, they can utilize their debit card and the bank will let them go into an overdraft, which is a negative balance on their deposit account, allowing them to make the purchase.`,
      `What is the effect of a customer's overdraft on the balance sheets? When a customer has a negative balance, the customer is in debt to the bank. This means that the customer's overdraft is a liability for them and an asset for the bank; the bank will receive money from the customer in the future. This money can be paid back either in cash or by transferring funds into the customer's account.`,
      `A bank overdraft is a form of credit which involves the customer making a promise to pay the bank cash on demand at a future date, just like deposits are a promise for the bank to pay cash on demand at a future date.`,
      `The amount of credit available in an economy is determined by how much people are willing to wait for repayment, rather than relying on the amount of real money or gold. Credit is easier and quicker to acquire than cash, gold, or cryptocurrency as it is only a promise to pay. Banks decide how long this credit can be extended before the debt must be repaid, and may also charge a fee for overdrafts.`,
      `The chart below shows how the amount of credit and reserves in the bank changes with deposits and withdrawals. Initially, the amount of credit and reserves is equal to zero. When a customer deposits $100, the amount of credit and reserves in the system increases to $100. If the customer withdraws $50, the amount of credit and reserves decreases to $50. If the customer transfers $50 to another customer of the same bank, the amount of credit increases to $100, while the amount of reserves stays the same. The only way to reduce the amount of credit to the amount of reserves is for the customer to pay back their overdraft. This increase and decrease in the amount of credit and reserves is known as the credit multiplier, and we will use Perry Mehrling's terms "expansion and contraction".`,
    ],
    assignment: `Each customer has $100 in an account at the same bank. To expand the credit in the system, increase the overdraft limit in the settings panel by $50, bringing the total to $150. To contract the credit to $0, reduce the overdraft limit in the settings panel back to its original amount.`,
  },
  step5: {
    lectureTitle: `fundamentals`,
    title: `Loans`,
    paragraphs: [
      `Usually overdrafts are no more than a couple of thousand dollars. But banks can offer customers more than this in the form of a loan if they require a quick injection of money to start a business. This loan works by increasing a customer's deposit account, with the condition that the borrowed money and any associated interest must be repaid at a later date.`,
      `When customers deposit money into a bank, the bank's balance sheet expands on both sides: customer assets increase and bank liabilities increase. This money must be paid back in the future, so bank assets also increase and customer liabilities also increase. This is an expansion on both sides of the balance sheet.`,
      `The process of creating money from loans, known as credit expansion (or "out of thin air") in economics, comes with a risk. When done responsibly, the real money will rise to meet the debt and create economic growth. But if not done correctly, it can lead to an inability to pay and cause an economic catastrophe, as seen in the 2008 financial crisis. To ensure success, all payments must be carefully settled.`,
    ],
    assignment: `Have a customer take out a loan. Is there a way for this customer to pay it back?`,
  },
  step6: {
    lectureTitle: `fundamentals`,
    title: `Constraint`,
    paragraphs: [
      `The government or banks themselves may impose constraints to try to reduce the risk associated with loans, overdrafts, etc. These constraints are also naturally created due to banks' dual role as both a profit-making institution and a payments provider.`,
      `Because cash is in many ways seen as the final form of settlement, a bank must ensure it can meet the demands of its customers by having enough cash available. To do this, it must keep enough of its customers' deposits in a vault in case all the customers want to withdraw their money at once. Although this is unlikely, banks must be prepared for a 'bank-run' in which many customers withdraw their money simultaneously. The bank however would prefer to use these funds elsewhere. In order to use these funds for other investments, the bank must be confident that it can fulfil its customers' cash needs at any time.`,
      `Banks are subject to many restrictions, such as the requirement to keep a fraction of total customer deposits in reserve. For instance, if a bank has $10,000 in total customer deposits, it may be legally obligated to keep $2,500 on hand to meet daily needs.`,
      `Playing with overdrafts has shown us how credit can both expand and contract. When credit expands, it indicates there is a lot of investment and payments occurring. However, if everyone suddenly decides to withdraw their deposits as cash, this could be risky for the bank. On the other hand, if credit does not expand, growth can become stagnant or even cease. The "Art of Banking" requires finding a balance between having restrictions and being flexible.`,
    ],
    assignment: `Change the reserve requirement and see how it effects the elasticity of the system.`,
  },
  step7: {
    lectureTitle: `fundamentals`,
    title: `Conclusion`,
    paragraphs: [
      `We have already discussed the fundamentals of balance sheets, the distinction between cash and loans, overdrafts, and credit expansion and restriction. In the upcoming lecture, we will investigate how banks handle these matters on a national level, enabling customers from various banks to make transactions, and how the idea of 'One Big Bank' - a banker's bank, or a  type of governing body or a large bank, simplifies the process.`,
    ],
    assignment: `Experiment with making deposits, taking out withdrawals, transferring funds, going into overdraft, and taking out loans, as well as setting limits and increasing credit.`,
  },
};
