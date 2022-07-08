import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices";

const store = configureStore({
  reducer: { cart: cartSlices.reducer },
});
export default store;
