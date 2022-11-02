import store from "../store/store"

export interface StoreIntialStateType {
    productsList: Product[];
    userCart: Product[];
};

export interface Product {
    name: string,
    price: number,
    amount: number,
    id: string
};

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

