import { Action } from "@reduxjs/toolkit";
import axios from "axios";
import { takeEvery, put, take } from "redux-saga/effects";
import { Api } from "../../../constants/constants";
import { Order } from "../../../types/ordersTypes";
import { getProductsList, resetUserCart } from "../StoreReducer/storeReducer";
import { changeOrderStatus, createOrder, deleteOrder, getAccountingOrdersList, getAdminOrdersList, getDeliveryOrdersList, getOrderById, getStorageOrdersList, setAccountingOrdersList, setAdminOrderList, setDeliveryOrdersList, setStorageOrdersList, setTrackingInfo, submitOrderProvidedMoney, submitOrderRequestedMoney } from "./ordersReducer";
// import axios from "axios";

function* getAdminOrderSaga() {
  // const result = OrdersMock;
  const { data } = yield axios.get(Api.orders);
  console.log(data);

  yield put(setAdminOrderList(data));
}

function* getAccountingOrdersListSaga() {
  const { data } = yield axios.get(Api.orders);

  yield put(setAccountingOrdersList(data.filter((el: Order) => (el.orderStatus === 1 || el.orderStatus === 2))));
}

function* getStorageOrderSaga() {
  const { data } = yield axios.get(Api.orders);
  yield put(setStorageOrdersList(data.filter((el: Order) => el.orderStatus === 3)));
}

function* getDeliveryOrderSaga() {
  const { data } = yield axios.get(Api.orders);
  yield put(setDeliveryOrdersList(data.filter((el: Order) => el.orderStatus === 4)));
}

function* createOrderSaga(action: any) {
  const { order, callback } = action.payload;
  const { data } = yield axios.post(Api.orders, order);
  yield put(getProductsList());
  yield put(resetUserCart());
  callback();
}

function* changeOrderStatusSaga(action: any) {
  const { data } = yield axios.put(Api.orders, action.payload);
  yield put(getAdminOrdersList());
  yield put(getAccountingOrdersList());
  yield put(getStorageOrdersList());
  yield put(getDeliveryOrdersList());

}

function* deleteOrderSaga(action: any) {
  console.log(action.payload);
  const { data } = yield axios.delete(Api.orders, {
    data: action.payload
  });
  yield put(getAdminOrdersList())
}

function* setRequestedMoneySaga(action: any) {
  const { data } = yield axios.put(Api.orderRequestedMoney, action.payload);
  yield put(changeOrderStatus({ id: action.payload.id, statusId: 2 }))
  yield put(getAccountingOrdersList())
}

function* setProvidedMoneySaga(action: any) {
  const { data } = yield axios.put(Api.orderSubmittedMoney, action.payload);
  yield put(getOrderById({ id: action.payload.id }))
}

function* getOrderByIdSaga(action: any) {
  const { data } = yield axios.get(`${Api.orders}/${action.payload.id}`).catch(() => {
    alert("no order with provided Id")
  });
  yield put(setTrackingInfo(data));
}

function* OrdersSaga() {
  yield takeEvery(getAdminOrdersList, getAdminOrderSaga);
  yield takeEvery(getAccountingOrdersList, getAccountingOrdersListSaga);
  yield takeEvery(getStorageOrdersList, getStorageOrderSaga);
  yield takeEvery(createOrder, createOrderSaga);
  yield takeEvery(changeOrderStatus, changeOrderStatusSaga);
  yield takeEvery(deleteOrder, deleteOrderSaga);
  yield takeEvery(submitOrderRequestedMoney, setRequestedMoneySaga);
  yield takeEvery(getOrderById, getOrderByIdSaga);
  yield takeEvery(submitOrderProvidedMoney, setProvidedMoneySaga);
  yield takeEvery(getDeliveryOrdersList, getDeliveryOrderSaga);

}

export default OrdersSaga;
