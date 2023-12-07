import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const activitySlice = createSlice({
  name: "activities",
  initialState: { activity: [], loading: false, modal: null },
  reducers: {
    toggleModalVisability(state) {
      state.modal = !state.modal;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getActivity.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.activity = action.payload; // Update names in state with fetched data
      })
      .addCase(getActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error in state if request fails
      });
  },
});

export const getActivity = createAsyncThunk(
  "activities/getActivity",
  async (_, thunkAPI) => {
    // Since there's no parameter, using "_" as a placeholder
    try {
      const response = await axios.get("https://www.boredapi.com/api/activity");
      return response.data; // Return the fetched data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data); // Return error if there's an issue
    }
  }
);

export default activitySlice;
export const activitySliceActions = activitySlice.actions;
