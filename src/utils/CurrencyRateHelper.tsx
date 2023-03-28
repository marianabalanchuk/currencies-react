import CurrenciesArray, { Currency } from "./CurrenciesArray";

const getCurrencyRateHelper = (name: string) => {
  let currency: Currency = CurrenciesArray[0];
  currency =
    CurrenciesArray.find((element) => element.currency === name) ??
    CurrenciesArray[0];

  return currency.rate;
};

export default getCurrencyRateHelper;
