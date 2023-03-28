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
  //   {
  //     currencyA: CurrencyConstants.USD,
  //     currencyB: CurrencyConstants.EUR,
  //     rate: 0.93,
  //   },
  //   {
  //     currencyA: CurrencyConstants.USD,
  //     currencyB: CurrencyConstants.GBP,
  //     rate: 0.81,
  //   },
  //   {
  //     currencyA: CurrencyConstants.USD,
  //     currencyB: CurrencyConstants.UAH,
  //     rate: 36.92,
  //   },
  //   {
  //     currencyA: CurrencyConstants.EUR,
  //     currencyB: CurrencyConstants.GBP,
  //     rate: 0.88,
  //   },
  //   {
  //     currencyA: CurrencyConstants.EUR,
  //     currencyB: CurrencyConstants.UAH,
  //     rate: 39.89,
  //   },
  //   {
  //     currencyA: CurrencyConstants.EUR,
  //     currencyB: CurrencyConstants.USD,
  //     rate: 1.08,
  //   },
  //   {
  //     currencyA: CurrencyConstants.GBP,
  //     currencyB: CurrencyConstants.UAH,
  //     rate: 45.4,
  //   },
  //   {
  //     currencyA: CurrencyConstants.GBP,
  //     currencyB: CurrencyConstants.EUR,
  //     rate: 1.14,
  //   },
  //   {
  //     currencyA: CurrencyConstants.GBP,
  //     currencyB: CurrencyConstants.USD,
  //     rate: 1.23,
  //   },
];

// export const getProductsObject = (array: Product[]) =>
//   array.reduce((object, product) => ({ ...object, [product.id]: product }), {});

export default CurrenciesArray;
