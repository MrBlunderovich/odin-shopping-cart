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
/* export const fetchRandomPokemon = createAsyncThunk(
  "game/fetchRandomPokemon",
  async (_, thunkAPI) => {
    const wholeState = thunkAPI.getState() as RootState;
    const gameState = wholeState.game;
    const IDs = pickRandomIDs(gameState.numberOfCards);
    const promises = IDs.map((id) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.data)
    );
    const results = await Promise.all(promises);
    return results;
  }
); */
type ProductState = {
  products: Product[];
};
const initialState: ProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    /* cardClick: (state, action) => {
      return;
    }, */
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.items;
    });
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
