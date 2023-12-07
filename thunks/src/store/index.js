import { configureStore } from "@reduxjs/toolkit";
import activitySlice from "./activitySlice";
import factsAboutCatsSlice from "./factsAboutCats";
import dogsImagesSlice from "./dogsImages";
import memeSlice from "./memeSlice";


const store = configureStore({
  reducer: {
    activity: activitySlice.reducer,
    cats: factsAboutCatsSlice.reducer,
    dogs: dogsImagesSlice.reducer,
    meme: memeSlice.reducer,
   
  },
});

export default store;
