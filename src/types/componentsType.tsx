import { Order, OrderedProductType } from "./ordersTypes"
import { Product } from "./storeTypes"

export interface SubHeaderType {
    links: {linkName: string, linkTo: string}[]
}

export interface StorageOrderType {
    order: Order,
    products: Product[]
}

export interface StorageDataItemType {
    orderId: string,
    orderedProduct: OrderedProductType,
    products: Product[]
}

export interface OrderItemComponent {
    order: Order,
    statusToChange: number
    role: string
}