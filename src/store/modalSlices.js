import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  isOpen: false,
};
const modalSlices = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    modelIsOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const modalActions = modalSlices.actions;
export default modalSlices;
