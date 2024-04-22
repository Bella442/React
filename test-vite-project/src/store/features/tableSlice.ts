import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TableState {
  country: string;
}

const initialState: TableState = {
  country: ""
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateCountry: (state, action: PayloadAction<string>) => {
      return { ...state, country: action.payload };
    },
  },
});

export const { updateCountry } = tableSlice.actions;

export default tableSlice.reducer;
