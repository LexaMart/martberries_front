import { takeEvery, put } from "redux-saga/effects";
// import axios from "axios";
import { ProductsMock } from "../../../mock/mock";
import { getProductsList, setProductsList } from "./storeReducer";


function* getProductsListSaga() {
  const result = ProductsMock;
  yield put(setProductsList(result));
}

function* StoreSaga() {
    yield takeEvery(getProductsList, getProductsListSaga);
  }

export default StoreSaga;
