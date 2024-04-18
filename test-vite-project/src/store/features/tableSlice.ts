import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UniversityData } from "../../apiModels/universityData";

export interface TableState {
  tableData: Array<UniversityData>;
}

const initialState: TableState = {
  tableData: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<Array<UniversityData>>) => {
      return { ...state, tableData: [...action.payload] };
    },
  },
});

export const { updateData } = tableSlice.actions;

export default tableSlice.reducer;
