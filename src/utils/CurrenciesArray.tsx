import CurrencyConstants from "./CurrencyConstants";

export type Currency = {
  currency: string;
  rate: number;
};

const CurrenciesArray: Currency[] = [
  {
    currency: CurrencyConstants.USD,
    rate: 0.027,
  },
  {
    currency: CurrencyConstants.EUR,
    rate: 0.025,
  },
  {
    currency: CurrencyConstants.GBP,
    rate: 0.022,
  },
  {
    currency: CurrencyConstants.UAH,
    rate: 1,
  },
];
export default CurrenciesArray;
