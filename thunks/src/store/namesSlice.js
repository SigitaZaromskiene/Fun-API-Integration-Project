import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const namesSlice = createSlice({
    name:'name',
    initialState:{names:[], loading: false},
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getNames.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNames.fulfilled, (state, action) => {
                state.loading = false;
                state.names = action.payload; // Update names in state with fetched data
            })
            .addCase(getNames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set error in state if request fails
            });
    }
   

    
})


export const getNames = createAsyncThunk(
    'names/getNames',
    async (_, thunkAPI) => { // Since there's no parameter, using "_" as a placeholder
        try {
            const response = await axios.get('https://www.boredapi.com/api/activity');
            return response.data; // Return the fetched data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data); // Return error if there's an issue
        }
    }
);

export default namesSlice
export const namesSliceActions =  namesSlice.actions