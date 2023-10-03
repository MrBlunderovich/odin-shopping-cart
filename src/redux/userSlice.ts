import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem, Credentials, User } from "../declarations";
import axios from "axios";

export const login = createAsyncThunk<any, Credentials>(
  "user/login",
  async (credentials) => {
    const { username: identity, password } = credentials;
    const response = await axios.post(
      "https://grumpy-elephant.pockethost.io/api/collections/users/auth-with-password",
      {
        identity,
        password,
      }
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

const initialState: User = {
  user: null,
  accessToken: null,
  refreshToken: null,
  cart: [],
};

function newCartItem(id: string, quantity: number): CartItem {
  return { id, quantity };
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      const productInCart = state.cart.find((item) => item.id === id);
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push(newCartItem(id, 1));
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.record.username;
      state.accessToken = action.payload.token;
    });
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
