import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  isOpen: false,
};
const cartSlices = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    modelIsOpen: (state, action) => {
      state.isOpen = true;
    },
  },
});
export const cartActions = cartSlices.actions;
export default cartSlices;
