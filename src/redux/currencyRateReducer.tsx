import { createSlice } from "@reduxjs/toolkit";
import CurrencyConstants from "../utilts/CurrencyConstants";
import CurrencyRateHelper from "../utilts/CurrencyRateHelper";

type CurrencyRate = {
  rate: number;
  name: string;
};

export const initialState: CurrencyRate = {
  rate: CurrencyRateHelper(CurrencyConstants.UAH),
  name: CurrencyConstants.UAH.toString(),
};

export const currencyRate = createSlice({
  name: "rate",
  initialState,
  reducers: {
    setRate: (state, action) => ({
      ...state,
      rate: action.payload,
    }),
  },
});

export const { setRate } = currencyRate.actions;

export default currencyRate.reducer;
