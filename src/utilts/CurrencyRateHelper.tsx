import CurrenciesArray, { Currency } from "./CurrenciesArray";

const getCurrencyRateHelper = (code: number) => {
  let currency: Currency = CurrenciesArray[0];
  currency =
    CurrenciesArray.find((element) => element.currency === code) ??
    CurrenciesArray[0];

  return currency.rate;
};

export default getCurrencyRateHelper;
