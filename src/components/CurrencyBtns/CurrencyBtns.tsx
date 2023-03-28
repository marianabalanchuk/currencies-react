import React from "react";
import { currencyRate, setRate } from "../../redux/currencyRateReducer";
import { useAppDispatch } from "../../redux/hooks";
import CurrenciesArray from "../../utilts/CurrenciesArray";
import CurrencyConstants from "../../utilts/CurrencyConstants";
import getCurrencyRateHelper from "../../utilts/CurrencyRateHelper";

type Props = {};

const CurrencyBtns = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(setRate(getCurrencyRateHelper(CurrencyConstants.UAH)))
        }>
        UAH
      </button>
      <button
        onClick={() =>
          dispatch(setRate(getCurrencyRateHelper(CurrencyConstants.USD)))
        }>
        USD
      </button>
      <button
        onClick={() =>
          dispatch(setRate(getCurrencyRateHelper(CurrencyConstants.EUR)))
        }>
        EUR
      </button>
      <button
        onClick={() =>
          dispatch(setRate(getCurrencyRateHelper(CurrencyConstants.GBP)))
        }>
        GBP
      </button>
    </div>
  );
};

export default CurrencyBtns;
