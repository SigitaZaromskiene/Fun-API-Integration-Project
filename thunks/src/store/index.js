import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";

import factsAboutCatsSlice from "./factsAboutCats";

const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
    cats: factsAboutCatsSlice.reducer,
  },
});

export default store;
