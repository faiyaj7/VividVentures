import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import RecentViewSlice from "./RecentViewSlice";

const store = configureStore({
  reducer: { productSlice: productSlice, recentView: RecentViewSlice },
});

export default store;
