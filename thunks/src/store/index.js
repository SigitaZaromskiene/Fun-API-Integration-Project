import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";

const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
  },
});

export default store;
