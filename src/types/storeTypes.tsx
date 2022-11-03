import store from "../store/store"

export interface StoreIntialStateType {
    productsList: Product[];
    userCart: Product[];
};

export interface Product {
    name: string,
    price: number | null | string,
    amount: number | null | string,
    id: string
};

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

