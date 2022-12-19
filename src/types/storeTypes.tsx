import { Transaction } from "./transactionsType";

export interface StoreIntialStateType {
    productsList: Product[];
    userCart: Product[];
    suppliers: Supplier[];
};

export interface Supplier {
    id: string;
    name: string;
    products: Product[];
}

export interface BuyActionInterface { id: string, amount: number, callback: Function }

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
