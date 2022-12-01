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

export interface SubmitOrderInput {
    order: {
        orderedProducts: {
            productId: string;
            amount: string;
        }[];
        customer_name: string;
        customer_phone: string;
        customer_additiona_info: string;
    }
    callback: Function;
}