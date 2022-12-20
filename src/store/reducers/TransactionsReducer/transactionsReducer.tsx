import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { ProductTransaction, TransactionsStateType } from "../../../types/storeTypes";
import { Transaction } from "../../../types/transactionsType";

const initialState: TransactionsStateType = {
  transactionsList: [],
  productTransactions: [],
};

export const setTransactionsList = createAction<Transaction[]>("SET_TRANSACTIONS_LIST");
export const getTransactionsList = createAction("GET_TRANSACTIONS_LIST");
export const getProductTransactions = createAction("GET_PRODUCT_TRANSACTIONS");
export const setProductTransactions = createAction<ProductTransaction[]>("SET_PRODUCT_TRANSACTIONS");


export const transactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setTransactionsList, (state, action: PayloadAction<any>) => {
    state.transactionsList = action.payload;
  })
  builder.addCase(getTransactionsList, (state, action) => { });
  builder.addCase(getProductTransactions, (state, action) => { });
  builder.addCase(setProductTransactions, (state, action: PayloadAction<any>) => {
    state.productTransactions = action.payload;
  })
})
