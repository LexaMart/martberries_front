import { takeEvery, put } from "redux-saga/effects";
import { OrdersMock } from "../../../mock/mock";
import { getAccountingOrdersList, getAdminOrdersList, getStorageOrdersList, setAccountingOrdersList, setAdminOrderList, setStorageOrdersList } from "./ordersReducer";
// import axios from "axios";

function* getAdminOrderSaga() {
  const result = OrdersMock;
  yield put(setAdminOrderList(result));
}

function* getAccountingOrdersListSaga() {
  const result = OrdersMock;
  yield put(setAccountingOrdersList(result));
}

function* getStorageOrderSaga() {
  const results = OrdersMock;
  yield put(setStorageOrdersList(results));
}

function* OrdersSaga() {
  yield takeEvery(getAdminOrdersList, getAdminOrderSaga);
  yield takeEvery(getAccountingOrdersList, getAccountingOrdersListSaga);
  yield takeEvery(getStorageOrdersList, getStorageOrderSaga);
}

export default OrdersSaga;
