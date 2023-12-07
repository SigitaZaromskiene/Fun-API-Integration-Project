import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const activitySlice = createSlice({
  name: "activities",
  initialState: { activity: [], loading: false, modal: null, error: null },
  reducers: {
    toggleModalVisability(state) {
      state.modal = !state.modal;
    },
    toggleFetchErrorMessage(state) {
      state.fetchError = !state.fetchError;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getActivity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getActivity.fulfilled, (state, action) => {
      state.loading = false;
      state.activity = action.payload;
      state.error = null; // Update names in state with fetched data
    });
    builder.addCase(getActivity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set error in state if request fails
    });
  },
});

export const getActivity = createAsyncThunk(
  "activities/getActivity",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://www.boredapi.com/api/activity");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default activitySlice;
export const activitySliceActions = activitySlice.actions;
