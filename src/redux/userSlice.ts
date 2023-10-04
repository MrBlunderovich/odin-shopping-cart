import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserCartItem, Credentials, User } from "../declarations";
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
  cart: [] as UserCartItem[],
};

/* function newCartItem(id: string, quantity: number): CartItem {
  return { id, quantity };
} */

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload.data;
      const id = data.id;
      const productInCart = state.cart.find((item) => item.id === id);
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({ ...data, quantity: 1 });
      }
    },
    cartItemIncrement: (state, action) => {
      const id = action.payload.id as string;
      const itemToChange = state.cart.find((item) => item.id === id);
      itemToChange && (itemToChange.quantity += 1);
    },
    cartItemDecrement: (state, action) => {
      const id = action.payload.id as string;
      const itemToChange = state.cart.find((item) => item.id === id);
      itemToChange && itemToChange.quantity > 1 && (itemToChange.quantity -= 1);
    },
    cartItemDelete: (state, action) => {
      const id = action.payload.id as string;
      state.cart = state.cart.filter((item) => item.id !== id);
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
