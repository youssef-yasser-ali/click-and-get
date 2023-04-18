import { configureStore } from "@reduxjs/toolkit";
// import products from "./slices/productsSlice";
import carts from "./slices/cartSlice";

//  Store

export const store = configureStore({
  reducer: { carts },
});
