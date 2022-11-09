export interface Order {
    id: string;
    date: string;
    status: string;
    requestor: string;
}

export interface OrderReducerType {
    adminOrders: Order[]
}