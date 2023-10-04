import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { catalogReducer } from "./catalogSlice";
//import { cartReducer } from "./_cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    catalog: catalogReducer,
    //cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
