// Products Slice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const APIURL = `http://localhost:3000`;
export const feachProducts = createAsyncThunk(
  "products/feachProducts",
  async () => {
    const res = await fetch(`${APIURL}/products`);
    const data = await res.json();
    return data;
  }
);

export const proudctsSlice = createSlice({
  initialState: [],
  name: "proudcts",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(feachProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = proudctsSlice.actions;
export default proudctsSlice.reducer;
