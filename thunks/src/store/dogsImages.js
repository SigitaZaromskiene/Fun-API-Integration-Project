import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dogsImagesSlice = createSlice({
  name: "dogs",
  initialState: { dogsImg: [], loading: false, modal: null, error: null },
  reducers: {
    toggleModalVisability(state) {
      state.modal = !state.modal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDogsImg.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDogsImg.fulfilled, (state, action) => {
      state.loading = false;
      state.dogsImg = action.payload;
      state.error = null;
    });
    builder.addCase(getDogsImg.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const getDogsImg = createAsyncThunk(
  "dogs/getDogsImg",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default dogsImagesSlice;
export const dogImagesActions = dogsImagesSlice.actions;
