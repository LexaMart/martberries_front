import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { AppDispatch, RootState } from "../types/reduxTypes";
import { ordersReducer } from "./reducers/OrdersReducer.tsx/ordersReducer";
import { storeReducer } from "./reducers/StoreReducer/storeReducer";
import { rootSaga } from "./rootSaga";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


const saga = createSagaMiddleware()

export default configureStore({
  reducer: { storeReducer, ordersReducer },
  devTools: true,
  middleware: [saga],
});

saga.run(rootSaga);
