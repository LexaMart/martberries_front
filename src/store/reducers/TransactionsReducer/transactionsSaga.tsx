import axios from "axios";
import { takeEvery, put, take } from "redux-saga/effects";
import { Api } from "../../../constants/constants";
import { setTransactionsList, getTransactionsList, setProductTransactions, getProductTransactions } from "./transactionsReducer";
// import axios from "axios";

function* getTransactionsListSaga() {
  const { data } = yield axios.get(Api.moneyTransfer);
  yield put(setTransactionsList(data));
}

function* getProductTransactionsSaga() {
  const { data } = yield axios.get(Api.productTransactions);
  yield put(setProductTransactions(data));
}

function* TransactionsSaga() {
  yield takeEvery(getTransactionsList, getTransactionsListSaga);
  yield takeEvery(getProductTransactions, getProductTransactionsSaga);
}

export default TransactionsSaga;
