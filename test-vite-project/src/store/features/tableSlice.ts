import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UniversityData } from "../../apiModels/universityData";

export interface TableState {
  tableData: Array<UniversityData>;
  country: string;
}

const initialState: TableState = {
  tableData: [],
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
