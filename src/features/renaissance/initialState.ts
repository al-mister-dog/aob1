import { Quotes, Rates, Currencies } from "./types";

export const certaintyQuotes: Quotes = {
  Florence: false,
  Lyons: true,
};

export const exchangeRates: Rates = {
  Florence: 65.5,
  Lyons: 64,
};

export const currencies: Currencies = {
  Florence: "ecus",
  Lyons: "marcs",
};

// export const Salviati = {
//   id: "Salviati",
//   city: "Lyons",
//   assets: [],
//   liabilities: [],
//   coins: {
//     marcs: 1,
//   },
//   goods: 10,
// };

// export const me = {
//   id: "me",
//   city: "Florence",
//   assets: [],
//   liabilities: [],
//   coins: {
//     ecus: 500,
//   },
//   goods: 10,
// };

// export const Federigo = {
//   id: "Federigo",
//   city: "Florence",
//   assets: [],
//   liabilities: [],
//   coins: {
//     ecus: 500,
//   },
//   goods: 10,
// };

// export const Piero = {
//   id: "Piero",
//   city: "Lyons",
//   assets: [],
//   liabilities: [],
//   coins: {
//     marcs: 1,
//   },
//   goods: 10,
// };

// export const you = {
//   id: "you",
//   city: "Florence",
//   assets: [],
//   liabilities: [],
//   coins: {
//     ecus: 500,
//     marcs: 10,
//   },
// };

// export const Tommaso = {
//   id: "Tommaso",
//   city: "Lyons",
//   assets: [],
//   liabilities: [],
//   coins: {
//     ecus: 500,
//     marcs: 10,
//   },
// };

// export const state = {
//   certaintyQuotes,
//   exchangeRates,
//   currencies,
//   me,
//   Salviati,
//   Federigo,
//   Piero,
//   you,
//   Tommaso
// }
export const Salviati = {
  id: "Salviati",
  city: "Lyons",
  type: "importer",
  assets: [],
  liabilities: [],
  coins: {
    marcs: 1,
  },
  goods: 10,
  coinAsset: [],
  coinLiability: [],
  records: [],
};
export const me = {
  id: "me",
  city: "Florence",
  type: "exporter",
  assets: [],
  liabilities: [],
  coins: {
    ecus: 500,
  },
  goods: 10,
  coinAsset: [],
  coinLiability: [],
  records: [],
};
export const Federigo = {
  id: "Federigo",
  city: "Florence",
  type: "importer",
  assets: [],
  liabilities: [],
  coins: {
    ecus: 500,
  },
  goods: 10,
  coinAsset: [],
  coinLiability: [],
  records: [],
};
export const Piero = {
  id: "Piero",
  city: "Lyons",
  type: "exporter",
  assets: [],
  liabilities: [],
  coins: {
    marcs: 1,
  },
  goods: 10,
  coinAsset: [],
  coinLiability: [],
  records: [],
};
export const you = {
  id: "you",
  city: "Florence",
  type: "banker",
  assets: [],
  liabilities: [],
  coins: {
    ecus: 500,
    marcs: 10,
  },
  goods: 0,
  coinAsset: [],
  coinLiability: [],
  records: [],
};
export const Tommaso = {
  id: "Tommaso",
  city: "Lyons",
  type: "banker",
  assets: [],
  liabilities: [],
  coins: {
    ecus: 500,
    marcs: 10,
  },
  goods: 0,
  coinAsset: [],
  coinLiability: [],
  records: [],
};
