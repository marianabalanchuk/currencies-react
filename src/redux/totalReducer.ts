import { createSlice, AnyAction } from "@reduxjs/toolkit";

type TotalCount = {
  [total: string]: number;
};

export const initialState: TotalCount = {
  total: 0,
};

export const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    updateTotal: (state, action) => ({
      ...state,
      total: state.total + action.payload,
    }),
  },
});

export const { updateTotal } = totalSlice.actions;

export default totalSlice.reducer;
