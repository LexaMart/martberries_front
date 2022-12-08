import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { Api } from "../../../constants/constants";
import { setTransactionsList, getTransactionsList } from "./transactionsReducer";
// import axios from "axios";

function* getTransactionsListSaga() {
  const { data } = yield axios.get(Api.moneyTransfer)
  yield put(setTransactionsList(data));
}

function* TransactionsSaga() {
  yield takeEvery(getTransactionsList, getTransactionsListSaga);
}

export default TransactionsSaga;
