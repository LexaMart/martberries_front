import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { BuyActionInterface, Product, StoreIntialStateType, Supplier } from "../../../types/storeTypes";

const initialState: StoreIntialStateType = {
  productsList: [],
  userCart: [],
  suppliers: []
};


// export const addItemAction = createAction("AddItem");
export const resetUserCart = createAction("RESET_USER_CART");
export const setProductsList = createAction<Product[]>("SET_PRODUCTS_LIST");
export const toggleProductToCart = createAction<Product>("ADD_PRODUCT_TO_CART");
export const changeCartProduct = createAction<Product>("CHANGE_CART_PRODUCT");
export const getProductsList = createAction("GET_PRODUCTS_LIST");
export const getSuppliers = createAction("GET_SUPPLIERS");
export const setSuppliers = createAction<Supplier[]>("SET_SUPPLIERS");
export const postSupplierProduct = createAction<BuyActionInterface>("POST_SUPP_PRODUCT");

export const storeReducer = createReducer(initialState, (builder) => {
  builder.addCase(setProductsList, (state, action: PayloadAction<any>) => {
    state.productsList = action.payload;
  })
  builder.addCase(getProductsList, (state, action) => { })
  builder.addCase(toggleProductToCart, (state, action) => {
    if (state.userCart.find(el => el.id === action.payload.id)) {
      state.userCart = state.userCart.filter(el => el.id !== action.payload.id);
    } else {
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
  builder.addCase(getSuppliers, (state, action) => {
  })
  builder.addCase(setSuppliers, (state, action) => {
    state.suppliers = action.payload;
  })
  builder.addCase(postSupplierProduct, (state, action) => { })
})
