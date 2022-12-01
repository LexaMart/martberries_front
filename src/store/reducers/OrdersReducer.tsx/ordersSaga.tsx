import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { Api } from "../../../constants/constants";
import { OrdersMock } from "../../../mock/mock";
import { getProductsList } from "../StoreReducer/storeReducer";
import { createOrder, getAccountingOrdersList, getAdminOrdersList, getStorageOrdersList, setAccountingOrdersList, setAdminOrderList, setStorageOrdersList } from "./ordersReducer";
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

function* createOrderSaga(action: any) {
  const {order, callback} = action.payload;
  const { data } = yield axios.post(Api.postOrder, {order});
  yield put(getProductsList());
  callback();
}

function* OrdersSaga() {
  yield takeEvery(getAdminOrdersList, getAdminOrderSaga);
  yield takeEvery(getAccountingOrdersList, getAccountingOrdersListSaga);
  yield takeEvery(getStorageOrdersList, getStorageOrderSaga);
  yield takeEvery(createOrder, createOrderSaga);
}

export default OrdersSaga;
