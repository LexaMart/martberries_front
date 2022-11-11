import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { TransactionsStateType } from "../../../types/storeTypes";
import { Transaction } from "../../../types/transactionsType";

const initialState: TransactionsStateType = {
  transactionsList: []
};

export const setTransactionsList = createAction<Transaction[]>("SET_TRANSACTIONS_LIST");
export const getTransactionsList = createAction("GET_TRANSACTIONS_LIST");


export const transactionsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setTransactionsList, (state, action: PayloadAction<any>) => {
    state.transactionsList = action.payload;
  })
  builder.addCase(getTransactionsList, (state, action) => { })
})
