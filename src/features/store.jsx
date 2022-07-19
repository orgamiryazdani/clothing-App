import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/CounterSlice";
import SearchReducer from "./counter/SearchSlice";

export const store = configureStore({
  reducer: {
    cart: CounterReducer,
    products: SearchReducer,
  },
});
