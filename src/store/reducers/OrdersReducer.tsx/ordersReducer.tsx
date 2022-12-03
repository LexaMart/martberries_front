import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderReducerType, SubmitOrderInput } from "../../../types/ordersTypes";

const initialState: OrderReducerType = {
  adminOrders: [],
  accountingOrders: [],
  storageOrders: [],
};

export const setAdminOrderList = createAction<Order[]>("SET_ADMIN_ORDERS_LIST");
export const getAdminOrdersList = createAction("GET_ADMIN_ORDERS");

export const getAccountingOrdersList = createAction("GET_ACCOUNTING_ORDERS_LIST");
export const setAccountingOrdersList = createAction<Order[]>("SET_ACCOUNTING_ORDERS_LIST");

export const getStorageOrdersList = createAction("GET_STORAGE_LIST");
export const setStorageOrdersList = createAction<Order[]>("SET_STORAGE_LIST");

export const createOrder = createAction<SubmitOrderInput, any>("CREATE_ORDER");
export const changeOrderStatus = createAction<{ id: string, statusId: number }>("CHANGE_ORDER_STATUS");
export const deleteOrder = createAction<{ id: string }>("DELETE_ORDER");

export const submitOrderProvidedMoney = createAction<{ id: string, requestedMoney: number }>("SET_ORDER_PROVIDED_MONEY");
export const submitOrderRequestedMoney = createAction<{ id: string, requestedMoney: number }>("SET_ORDER_REQUESTED_MONEY");


export const ordersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAdminOrderList, (state, action: PayloadAction<any>) => {
    state.adminOrders = action.payload;
  })
  builder.addCase(getAdminOrdersList, (state, action) => { })
  builder.addCase(getAccountingOrdersList, (state, action) => { })
  builder.addCase(setAccountingOrdersList, (state, action) => {
    state.accountingOrders = action.payload;
  });
  builder.addCase(setStorageOrdersList, (state, action) => {
    state.storageOrders = action.payload;
  });
  builder.addCase(getStorageOrdersList, (state, action) => { })
  builder.addCase(createOrder, (state, action) => { })
  builder.addCase(changeOrderStatus, (state, action) => { })
  builder.addCase(deleteOrder, (state, action) => { })
  builder.addCase(submitOrderProvidedMoney, (state, action) => { })
  builder.addCase(submitOrderRequestedMoney, (state, action) => { })

})
