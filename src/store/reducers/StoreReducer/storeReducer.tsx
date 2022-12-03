import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Product, StoreIntialStateType } from "../../../types/storeTypes";

const initialState: StoreIntialStateType = {
  productsList: [],
  userCart: [],
};


// export const addItemAction = createAction("AddItem");
export const resetUserCart = createAction("RESET_USER_CART");
export const setProductsList = createAction<Product[]>("SET_PRODUCTS_LIST");
export const toggleProductToCart = createAction<Product>("ADD_PRODUCT_TO_CART");
export const changeCartProduct = createAction<Product>("CHANGE_CART_PRODUCT");
export const getProductsList = createAction("GET_PRODUCTS_LIST");



export const storeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setProductsList, (state, action: PayloadAction<any>) => {
        state.productsList = action.payload;
    })
  builder.addCase(getProductsList, (state, action) => {})
  builder.addCase(toggleProductToCart, (state, action) => {
    if (state.userCart.find(el => el.id === action.payload.id)) {
      state.userCart = state.userCart.filter(el => el.id !== action.payload.id);
    }else {
      state.userCart.push(action.payload);
    }
  })
  builder.addCase(changeCartProduct, (state, action) => {
    state.userCart = state.userCart.filter(el => el.id !== action.payload?.id);
    state.userCart.push(action.payload);
  })
  builder.addCase(resetUserCart, (state, action) => {
    state.userCart = initialState.userCart
  })
})
