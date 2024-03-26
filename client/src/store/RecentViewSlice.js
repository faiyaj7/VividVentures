import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts(state, action) {
      const productExists = state.products.some(
        (product) => product._id === action.payload._id
      );

      // Only add the product if it does not exist
      if (!productExists) {
        state.products.push(action.payload);
      }
    },
  },
});
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
