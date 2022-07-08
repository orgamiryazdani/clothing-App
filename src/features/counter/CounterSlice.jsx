import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: { cart: [], total: 0 },
  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push({ ...action.payload, quantity: 1 });
      state.total += 1;
    },
  },
});

export const { addItemToCart } = counterSlice.actions;
export default counterSlice.reducer;
