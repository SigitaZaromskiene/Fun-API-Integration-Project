import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const factsAboutCatsSlice = createSlice({
  name: "cats",
  initialState: { fact: null, loader: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatsFacts.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getCatsFacts.fulfilled, (state, action) => {
      state.loader = false;
      state.fact = action.payload;
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
        "https://catfact.ninja/docs/api-docs.json"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.message);
    }
  }
);

export default factsAboutCatsSlice;
export const factsAboutCatsSliceActions = factsAboutCatsSlice.actions;
