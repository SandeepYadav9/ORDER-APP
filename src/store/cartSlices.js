import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartSlices = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    updatedTotalAmount:(state, action)=>{
      
    },
    addItem:(state, action)=>{}
  },
});
export const cartActions = cartSlices.actions;
export default cartSlices;
