export interface Order {
    id: string;
    submittedDateTime: string;
    orderedProducts?: OrderedProductType[];
    customerAdditionalInfo?: string;
    customerName: string;
    customerPhoneNumber: string;
    submittedMoney: number;
    requestedMoney: number;
    orderStatus: number;
}

export interface OrderedProductType {
    id: string,
    amount: number,
    name: string,
    price: number,
}
export interface OrderReducerType {
    adminOrders: Order[];
    accountingOrders: Order[];
    storageOrders: Order[];
    trackingInfo: Order | null;
}

export interface SubmitOrderInput {
    order: {
        orderedProducts: {
            productId: string;
            amount: any;
        }[];
        customerName: string;
        customerPhoneNumber: string;
        customerAdditionalInfo: string;
    }
    callback: Function;
}