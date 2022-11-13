import { Transaction } from "./transactionsType";

export interface StoreIntialStateType {
    productsList: Product[];
    userCart: Product[];
};

export interface TransactionsStateType {
    transactionsList: Transaction[]
}

export interface Product {
    name: string,
    price: number | null | string,
    amount: number | string,
    orderNumber?: number | string,
    id: string
};
