import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import UISlice from "./uiSlice";
import factsAboutCatsSlice from "./factsAboutCats";

const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
   modal: UISlice.reducer,
   cats: factsAboutCatsSlice.reducer,
  },
});

export default store;
