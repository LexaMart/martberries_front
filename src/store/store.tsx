import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { AppDispatch, RootState } from "../types/storeTypes";
import { storeReducer } from "./reducers/SoreReducer/storeReducer";
import storeSaga, {} from './reducers/SoreReducer/storeSaga'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


const saga = createSagaMiddleware()

export default configureStore({
  reducer: { storeReducer },
  devTools: true,
  middleware: [saga],
});

saga.run(storeSaga);
