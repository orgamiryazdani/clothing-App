import { createSlice } from "@reduxjs/toolkit";
import * as data from "../../data";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    item: {},
    items: data.products,
    data: data.products
  },
  reducers: {
    searchItem: (state, action) => {
      state.items = state.data.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
    },
  },
});

export const { searchItem } = searchSlice.actions;
export default searchSlice.reducer;
