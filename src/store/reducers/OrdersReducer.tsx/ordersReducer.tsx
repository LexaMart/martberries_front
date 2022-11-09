import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderReducerType } from "../../../types/ordersTypes";

const initialState: OrderReducerType = {
  adminOrders: []
};

export const setAdminOrderList = createAction<Order[]>("SET_ADMIN_ORDER_LIST");
export const getAdminOrdersList = createAction("GET_ADMIN_ORDERS");

export const ordersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAdminOrderList, (state, action: PayloadAction<any>) => {
    state.adminOrders = action.payload;
  })
  builder.addCase(getAdminOrdersList, (state, action) => { })
})
