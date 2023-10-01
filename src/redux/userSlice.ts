import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../declarations";

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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    cardClick: (state, action) => {
      return;
    },
  },

  extraReducers: (builder) => {
    /* builder.addCase(fetchRandomPokemon.fulfilled, (state, action) => {
      state.pokemonCards = action.payload;
    }); */
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
