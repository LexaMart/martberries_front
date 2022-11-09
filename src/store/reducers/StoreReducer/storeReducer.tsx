import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Product, StoreIntialStateType } from "../../../types/storeTypes";

const initialState: StoreIntialStateType = {
  productsList: [],
  userCart: [],
};


// export const addItemAction = createAction("AddItem");
export const setProductsList = createAction<Product[]>("SET_PRODUCTS_LIST");
export const addProductToCart = createAction<Product>("ADD_PRODUCT_TO_CART");
export const getProductsList = createAction("GET_PRODUCTS_LIST");



export const storeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setProductsList, (state, action: PayloadAction<any>) => {
        state.productsList = action.payload;
    })
  builder.addCase(getProductsList, (state, action) => {})
  builder.addCase(addProductToCart, (state, action) => {
    if (state.userCart.find(el => el.id === action.payload.id)) {
      state.userCart = state.userCart.filter(el => el.id !== action.payload.id);
    }else {
      state.userCart.push(action.payload);
    }
  })
})
