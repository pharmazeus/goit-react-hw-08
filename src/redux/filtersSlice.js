import { createSlice } from "@reduxjs/toolkit";
//

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const selectFilterName = (state) => {
  return state.filters.name;
};

export default slice.reducer;
export const { changeFilter } = slice.actions;
