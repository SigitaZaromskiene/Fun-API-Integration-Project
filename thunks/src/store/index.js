import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import UISlice from "./uiSlice";

const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
   modal: UISlice.reducer,
  },
});

export default store;
