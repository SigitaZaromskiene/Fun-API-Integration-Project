import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import factsAboutCatsSlice from "./factsAboutCats";
import dogsImagesSlice from "./dogsImages";

const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
    cats: factsAboutCatsSlice.reducer,
    dogs: dogsImagesSlice.reducer
  },
});

export default store;
