import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { Api } from "../../../constants/constants";
import { getStorageOrdersList } from "../OrdersReducer.tsx/ordersReducer";
// import axios from "axios";
import { getProductsList, getSuppliers, postSupplierProduct, setProductsList, setSuppliers } from "./storeReducer";


function* getProductsListSaga() {
  const { data } = yield axios.get(Api.getProducts);
  yield put(setProductsList(data));
}

function* getSuppliersSaga() {
  const { data } = yield axios.get(Api.supplier);
  yield put(setSuppliers(data))
}

function* postSupplierProductSaga(data: any) {
  yield axios.post(Api.supplierBuy, { id: data.payload.id, amount: data.payload.amount });
  yield put(getStorageOrdersList());
}

function* StoreSaga() {
  yield takeEvery(getProductsList, getProductsListSaga);
  yield takeEvery(getSuppliers, getSuppliersSaga)
  yield takeEvery(postSupplierProduct, postSupplierProductSaga)
}

export default StoreSaga;
