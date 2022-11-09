import { takeEvery, put } from "redux-saga/effects";
import { OrdersMock } from "../../../mock/mock";
import { getAdminOrdersList, setAdminOrderList } from "./ordersReducer";
// import axios from "axios";


function* getAdminOrderSaga() {
  const result = OrdersMock;
  yield put(setAdminOrderList(result));
}

function* OrdersSaga() {
    yield takeEvery(getAdminOrdersList, getAdminOrderSaga);
  }

export default OrdersSaga;
