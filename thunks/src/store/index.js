import { configureStore } from "@reduxjs/toolkit";
import namesSlice from "./namesSlice";

 const store = configureStore({
    reducer:{

        name: namesSlice.reducer
    }
    
})

export default store