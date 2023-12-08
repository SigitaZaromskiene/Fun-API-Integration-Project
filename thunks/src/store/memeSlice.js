import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const memeSlice = createSlice({
  name: "meme",
  initialState: {
    loading: false,
    memeImg: null,
    modal: null,
    errorMessage: false,
    error: null,
  },
  reducers: {
    toggleModalVisability(state) {
      state.modal = !state.modal;
    },
    deleteMemeImg(state) {
      state.memeImg = null;
    },
    toggleErrorMessageVisibility(state) {
      state.errorMessage = !state.errorMessage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMeme.pending, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(getMeme.fulfilled, (state, action) => {
      state.loading = !state.loading;
      state.error = null;
      state.memeImg = action.payload;
    });
    builder.addCase(getMeme.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const getMeme = createAsyncThunk("meme/getMeme", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default memeSlice;
export const memeSliceActions = memeSlice.actions;
