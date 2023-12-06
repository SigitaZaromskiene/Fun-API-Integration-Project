import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "UI",
  initialState: { modal: null },
  reducers: {
    toggleCartVisability(state) {
      state.modal = !state.modal;
    },
  },
});

export default UISlice;
export const UISliceActions = UISlice.actions;
