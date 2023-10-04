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
    cartItemIncrement: (state, action) => {
      const id = action.payload.id as string;
      state.cart.map((item) =>
        item.id === id ? newCartItem(id, item.quantity + 1) : item
      );
    },
    cartItemDecrement: (state, action) => {
      const id = action.payload.id as string;
      state.cart.map((item) =>
        item.id === id ? newCartItem(id, item.quantity - 1) : item
      );
    },
    cartItemDelete: (state, action) => {
      const id = action.payload.id as string;
      state.cart.filter((item) => item.id !== id);
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
