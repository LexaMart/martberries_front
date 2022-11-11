import { takeEvery, put } from "redux-saga/effects";
import { TransactionsMock } from "../../../mock/mock";
import { setTransactionsList, getTransactionsList } from "./transactionsReducer";
// import axios from "axios";

function* getTransactionsListSaga() {
  const result = TransactionsMock;
  yield put(setTransactionsList(result));
}

function* TransactionsSaga() {
  yield takeEvery(getTransactionsList, getTransactionsListSaga);
}

export default TransactionsSaga;
