import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderReducerType } from "../../../types/ordersTypes";

const initialState: OrderReducerType = {
  adminOrders: [],
  accountingOrders: []
};

export const setAdminOrderList = createAction<Order[]>("SET_ADMIN_ORDERS_LIST");
export const getAdminOrdersList = createAction("GET_ADMIN_ORDERS");
export const getAccountingOrdersList = createAction("GET_ACCOUNTING_ORDERS_LIST");
export const setAccountingOrdersList = createAction<Order[]>("SET_ACCOUNTING_ORDERS_LIST")

export const ordersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAdminOrderList, (state, action: PayloadAction<any>) => {
    state.adminOrders = action.payload;
  })
  builder.addCase(getAdminOrdersList, (state, action) => { })
  builder.addCase(getAccountingOrdersList, (state, action) => { })
  builder.addCase(setAccountingOrdersList, (state, action) => {
    state.accountingOrders = action.payload;
  })
})
