import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./cartSlices";

const store = configureStore({
  reducer: { name: cartSlices.reducer },
});
export default store;
