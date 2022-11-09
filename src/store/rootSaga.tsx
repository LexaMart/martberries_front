import { all } from "redux-saga/effects";
import OrdersSaga from "./reducers/OrdersReducer.tsx/ordersSaga";
import StoreSaga from "./reducers/StoreReducer/storeSaga";

export function* rootSaga() {
  yield all([
   StoreSaga(),
   OrdersSaga()
  ]);
}
