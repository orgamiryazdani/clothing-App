import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/CounterSlice";

export const store = configureStore({
  reducer: {
    cart: CounterReducer,
  },
});
