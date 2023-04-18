// Cart Slice

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const find = state.find((pro) => pro.id === action.payload.id);

      if (find) {
        find.quantity++;
      } else {
        const productCopy = { ...action.payload, quantity: 1 };
        state.push(productCopy);
      }
    },
    deleteFromCart: (state, action) => {
      //   const index = 1;
      const index = state.findIndex((pro) => pro.id == action.payload.id);
      state.splice(index, 1);
    },
    clearCarts: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCarts } = cartSlice.actions;
export default cartSlice.reducer;
