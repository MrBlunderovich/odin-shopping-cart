import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../declarations";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://grumpy-elephant.pockethost.io/api/collections/products/records"
    );
    console.log("data: ", response.data);
    return response.data;
  }
);

type ProductState = {
  products: Product[];
};
const initialState: ProductState = {
  products: [],
};

const catalogSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.items;
    });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const catalogActions = catalogSlice.actions;
