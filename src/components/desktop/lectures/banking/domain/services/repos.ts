import { reposData, ReposData } from "../structures/objects";
import { Bank } from "../structures/types";
import { Accounts } from "./accounts";
import { Securities } from "./securities";

export const Repos = {
  getRepos(bank: Bank) {
    return reposData.accounts[bank.id];
  },
  getReposById(id: number) {
    return reposData.accounts[id];
  },
  increaseRepos(bank: Bank, amount: number) {
    // let repos = { ...reposData.accounts[bank.id] };
    // repos.balance += amount;
    // ReposData.assignReposAccounts(repos);
  },
  decreaseRepos(bank: Bank, amount: number) {
    // let repos = { ...reposData.accounts[bank.id] };
    // repos.balance -= amount;
    // ReposData.assignReposAccounts(repos);
  },
  increaseTreasuries(bank: Bank, amount: number) {
    const bankAccount = reposData.accounts[bank.id].filter(
      (account) => account.instrument === "Treasury Bills"
    )[0];
    bankAccount.balance += amount;
  },
  decreaseTreasuries(bank: Bank, amount: number) {
    const bankAccount = reposData.accounts[bank.id].filter(
      (account) => account.instrument === "Treasury Bills"
    )[0];
    if (bankAccount.balance - amount >= 0) bankAccount.balance -= amount;
  },

  createRepo(
    bank1: Bank,
    bank2: Bank,
    instrument: string,
    amount: number,
    day: number
  ) {
    const newRepo = {
      id: reposData.id,
      balance: amount,
      subordinateId: bank1.id,
      superiorId: bank2.id,
      instrument,
      maturity: 1,
      interest: 5,
      principal: amount,
      day,
    };
    let repos = { ...reposData.accounts[reposData.id] };
    if (Object.keys(repos).length === 0) {
      repos = [];
    }
    repos.push(newRepo);
    reposData.accounts[reposData.id] = repos;
    reposData.allIds.push(reposData.id);
    reposData.id++;
    // ReposData.assignReposAccounts(repos);
  },

  addRepos(bank: Bank, type: string, amount: number) {
    const newSecurity = {
      id: bank.id,
      balance: amount,
      type,
      maturity: 1,
    };
    let repos = { ...reposData.accounts[bank.id] };
    if (Object.keys(repos).length === 0) {
      repos = [];
    }
    repos[reposData.id];
    reposData.allIds.push(reposData.id);
    reposData.id++;
    // ReposData.assignReposAccounts(repos);
  },
  create(id1) {
    reposData.accounts[id1] = [];
    reposData.allIds.push(id1);
  },
  /**
   * addReposTwo()
   * creates a repos array containing multiple repos of varying instruments
   * for example, one repos array belonging to a bank may contain two sets of
   * treasury bills with differing maturity dates, along with other repos.
   * on the balance sheet these can be aggregated and totalled by instrument
   * but in more complex UIs various data aggregations will be used
   */
  addReposTwo(id1, amount, instrument, maturity, interest) {
    let repos = { ...reposData.accounts[id1] };

    if (Object.keys(repos).length === 0) {
      Repos.create(id1);
    }

    const newSecurity = {
      id: id1,
      balance: amount,
      instrument,
      maturity,
      interest,
    };

    const newRepos = [...reposData.accounts[id1], newSecurity];

    const newReposData = {
      ...reposData,
      accounts: { ...reposData.accounts, [id1]: newRepos },
    };
    ReposData.assign(newReposData);
  },
  getTotalTreasuries() {},
  doRepo(bank1: Bank, bank2: Bank, amount: number, day: number) {
    Repos.createRepo(bank1, bank2, "Treasuries", amount, day);
    Securities.increaseTreasuries(bank1, amount);
    Securities.decreaseTreasuries(bank2, amount);
    Accounts.increaseCorrespondingBalance(bank1, bank2, amount);
  },
  completeRepo(bank1: Bank, bank2: Bank, amount: number) {
    Securities.decreaseTreasuries(bank1, amount);
    Securities.increaseTreasuries(bank2, amount);
    Accounts.decreaseCorrespondingBalance(bank1, bank2, amount);
  },
  fail() {},
};
