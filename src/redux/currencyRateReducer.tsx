import { createSlice } from "@reduxjs/toolkit";
import CurrencyConstants from "utils/CurrencyConstants";
import getCurrencyRateHelper from "utils/CurrencyRateHelper";
import CurrencyRateHelper from "utils/CurrencyRateHelper";

type CurrencyRate = {
  name: string;
  rate: number;
};

export const initialState: CurrencyRate = {
  rate: CurrencyRateHelper(CurrencyConstants.UAH),
  name: CurrencyConstants.UAH,
};

export const currencyRate = createSlice({
  name: "rate",
  initialState,
  reducers: {
    setRate: (state, action) => ({
      ...state,
      rate: getCurrencyRateHelper(action.payload),
      name: action.payload,
    }),
  },
});

export const { setRate } = currencyRate.actions;

export default currencyRate.reducer;
