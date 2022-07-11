import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices";
import modalSlices from "./modalSlices";

const store = configureStore({
  reducer: { modal: modalSlices.reducer, cart: cartSlices.reducer },
});
export default store;
