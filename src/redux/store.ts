import { configureStore } from "@reduxjs/toolkit";
import currencyRateReducer from "./currencyRateReducer";
import totalReducer from "./totalReducer";

export const store = configureStore({
  reducer: {
    total: totalReducer,
    currencyStore: currencyRateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
