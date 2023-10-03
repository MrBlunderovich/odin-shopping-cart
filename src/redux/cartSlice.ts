import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../declarations";
import axios from "axios";
import { RootState } from "./store";

export const fetchCartProducts = createAsyncThunk(
  "cart/fetchCartProducts",
  async (_, thunkAPI) => {
    const wholeState = thunkAPI.getState() as RootState;
    const userCartProductIDs = wholeState.user.cart.map((item) => item.id);
    //console.log("thunkAPI.getState()", thunkAPI.getState());
    const promises = userCartProductIDs.map((id) => {
      return axios
        .get(
          `https://grumpy-elephant.pockethost.io/api/collections/products/records/${id}`
        )
        .then((response) => response.data);
    });
    const data = await Promise.all<Product>(promises);
    console.log("data array: ", data);
    return data;
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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as Product[],
  },
  reducers: {
    clearCartProducts: (state) => {
      state.items.length = 0;
    },
    /* addToCart: (state, action) => {
      const id = action.payload.id;
      const productInCart = state.cart.find((item) => item.id === id);
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push(newCartItem(id, 1));
      }
    }, */
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCartProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
