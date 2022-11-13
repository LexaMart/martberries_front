export interface Order {
    id: string;
    date: string;
    status: string;
    requestor: string;
    products?: OrderedProductType[];
}

export interface OrderedProductType {
    id: string,
    amount: number,
    name: string,
}
export interface OrderReducerType {
    adminOrders: Order[];
    accountingOrders: Order[];
    storageOrders: Order[];
}