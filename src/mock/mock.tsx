import moment from "moment";
import { Order } from "../types/ordersTypes";
import { Product } from "../types/storeTypes";

export const ProductsMock:Product[] = [
    {
        name: "Tv ABOBA s22",
        amount: 4,
        price: 1448,
        id: "1",
    },
    {
        name: "Tv ABOBA s21",
        amount: 3,
        price: 148,
        id: "2",
    },
    {
        name: "Tv ABOBA s22",
        amount: 4,
        price: 1448,
        id: "3",
    },
    {
        name: "Tv ABOBA s22",
        amount: 4,
        price: 1448,
        id: "4",

    },
    {
        name: "Tv ABOBA s22",
        amount: 4,
        price: 1448,
        id: "5",
    },
    {
        name: "Tv ABOBA s22",
        amount: 4,
        price: 1448,
        id: "6",
    },
]

export const OrdersMock: Order[] = [
    {
        id: "1111-1111-1111",
        date: `${moment()}`,
        status: "0",
        requestor: "Alex December"
    },
    {
        id: "1111-1111-1111",
        date: `${moment()}`,
        status: "0",
        requestor: "Alex December"
    },
    {
        id: "1111-1111-1111",
        date: `${moment()}`,
        status: "0",
        requestor: "Alex December"
    },
    {
        id: "1111-1111-1111",
        date: `${moment()}`,
        status: "0",
        requestor: "Alex December"
    },
    {
        id: "1111-1111-1111",
        date: `${moment()}`,
        status: "0",
        requestor: "Alex December"
    },
    {
        id: "1111-1111-1111",
        date: `${moment()}`,
        status: "0",
        requestor: "Alex December"
    },
]