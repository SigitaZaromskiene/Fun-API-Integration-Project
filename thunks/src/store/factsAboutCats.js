import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const factsAboutCatsSlice = createSlice({
  name: "cats",
  initialState: { fact: [], loading: false, error: null, modal : null},
  reducers: {toggleModalVisability(state) {
    state.modal = !state.modal;
  },},
  extraReducers: (builder) => {
    builder.addCase(getCatsFacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCatsFacts.fulfilled, (state, action) => {
      state.loading = false;
      state.fact = action.payload;
      state.error= null;
    });
    builder.addCase(getCatsFacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const getCatsFacts = createAsyncThunk(
  "cats/getCatsFacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://catfact.ninja/fact?max_length=140"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default factsAboutCatsSlice;
export const factsAboutCatsSliceActions = factsAboutCatsSlice.actions;
