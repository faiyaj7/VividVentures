import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qty: 0,
  cart: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleDelete(state, action) {
      state.isDelete = action.payload;
    },
    emptyCart(state) {
      state.cart = [];
    },
    emptyQuantities(state) {
      state.totalQuantities = 0;
    },
    emptyPrice(state) {
      state.totalPrice = 0;
    },
    incQty(state) {
      state.qty += 1;
    },
    decQty(state) {
      state.qty = Math.max(0, state.qty - 1);
    },
    addToCart(state, action) {
      let product = action.payload.product;
console.log(product);
      let qty = action.payload.qty === 0 ? 1 : action.payload.qty;
      const productExist = state.cart.find((item) => item._id === product._id);
      // New product
      if (!productExist) {
        state.totalPrice += product.price;
        state.totalQuantities += qty;
        product = Object.assign({}, product, {
          totalQuantity: 1,
          totalPrice: product.price,
        });

        state.cart.push(product);
      } // Old product new Quantity
      else {
        state.totalQuantities += qty;
        state.totalPrice += product.price * qty;
        const updatedProduct = state.cart.map((item) => {
          if (item._id === product._id)
            return {
              ...item,
              totalQuantity: item.totalQuantity + qty,
              totalPrice: item.totalPrice + item.price * qty,
            };
          else return item;
        });
        state.cart = updatedProduct;
      }
      state.qty = 0;
    },

    toggleCartItems(state, action) {
      console.log(action.payload);
      let id = action.payload.id;
      let operator = action.payload.operator;
      const product = state.cart.find((item) => item._id === id);
      console.log(product);
      if (operator === "inc") {
        product.totalQuantity += 1;
        product.totalPrice += product.price;
        state.totalPrice += product.price;
        state.totalQuantities += 1;
      } else if (operator === "dec" && product.totalQuantity > 1) {
        product.totalQuantity = Math.max(1, product.totalQuantity - 1);
        product.totalPrice = Math.max(1, product.totalPrice - product.price);
        state.totalPrice -= product.price;
        state.totalQuantities -= 1;
      }
    },
    removeItemsFromCart(state, action) {
      // finding this product to reduce the totalPrice and totalQuantity
      console.log(action.payload);
      let id = action.payload.id;

      const product = state.cart.find((item) => item._id === id);

      const afterRemoveProduct = state.cart.filter((item) => item._id !== id);

      state.cart = afterRemoveProduct;
      state.totalPrice -= product.price * product.totalQuantity;
      state.totalQuantities -= product.totalQuantity;
    },
  },
});

export const {
  toggleDelete,
  emptyCart,
  emptyPrice,
  emptyQuantities,
  incQty,
  decQty,
  addToCart,
  toggleCartItems,
  removeItemsFromCart,
} = productSlice.actions;
export default productSlice.reducer;
