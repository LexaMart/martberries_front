import { takeEvery, put } from "redux-saga/effects";
import { OrdersMock } from "../../../mock/mock";
import { getAccountingOrdersList, getAdminOrdersList, setAccountingOrdersList, setAdminOrderList } from "./ordersReducer";
// import axios from "axios";

function* getAdminOrderSaga() {
  const result = OrdersMock;
  yield put(setAdminOrderList(result));
}

function* getAccountingOrdersListSaga() {
  const result = OrdersMock;
  yield put(setAccountingOrdersList(result));
}

function* OrdersSaga() {
  yield takeEvery(getAdminOrdersList, getAdminOrderSaga);
  yield takeEvery(getAccountingOrdersList, getAccountingOrdersListSaga);
}

export default OrdersSaga;
