export interface StoreIntialStateType {
    productsList: Product[];
    userCart: Product[];
};

export interface Product {
    name: string,
    price: number | null | string,
    amount: number | null | string,
    orderNumber?: number | string,
    id: string
};
