import { all } from "redux-saga/effects";
import OrdersSaga from "./reducers/OrdersReducer.tsx/ordersSaga";
import StoreSaga from "./reducers/StoreReducer/storeSaga";
import TransactionsSaga from "./reducers/TransactionsReducer/transactionsSaga";

export function* rootSaga() {
  yield all([
   StoreSaga(),
   OrdersSaga(),
   TransactionsSaga()
  ]);
}
