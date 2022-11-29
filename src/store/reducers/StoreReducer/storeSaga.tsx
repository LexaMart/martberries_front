import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { Api } from "../../../constants/constants";
// import axios from "axios";
import { getProductsList, setProductsList } from "./storeReducer";


function* getProductsListSaga() {
  const { data } = yield axios.get(Api.getProducts);
  yield put(setProductsList(data));
}

function* StoreSaga() {
    yield takeEvery(getProductsList, getProductsListSaga);
  }

export default StoreSaga;
