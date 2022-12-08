import moment from "moment";
import { Order } from "../types/ordersTypes";
import { Product } from "../types/storeTypes";
import { Transaction } from "../types/transactionsType";

// export const ProductsMock: Product[] = [
//     {
//         name: "Tv ABOBA s22",
//         amount: 4,
//         price: 1448,
//         id: "1",
//     },
//     {
//         name: "Tv ABOBA s21",
//         amount: 3,
//         price: 148,
//         id: "2",
//     },
//     {
//         name: "Tv ABOBA s22",
//         amount: 4,
//         price: 1448,
//         id: "3",
//     },
//     {
//         name: "Tv ABOBA s22",
//         amount: 4,
//         price: 1448,
//         id: "4",

//     },
//     {
//         name: "Tv ABOBA s22",
//         amount: 4,
//         price: 1448,
//         id: "5",
//     },
//     {
//         name: "Tv ABOBA s22",
//         amount: 4,
//         price: 1448,
//         id: "6",
//     },
// ]

// export const OrdersMock: Order[] = [
//     {
//         id: "1111-1111-1112",
//         date: `${moment()}`,
//         status: "0",
//         requestor: "Alex December",
//         products: [
//             {
//                 id: "1",
//                 name: "Tv ABOBA s22",
//                 amount: 6,
//             },
//             {
//                 id: "2",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//         ]
//     },
//     {
//         id: "1111-1111-1113",
//         date: `${moment()}`,
//         status: "0",
//         requestor: "Alex December",
//         products: [
//             {
//                 id: "1",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//             {
//                 id: "2",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//         ]
//     },
//     {
//         id: "1111-1111-1115",
//         date: `${moment()}`,
//         status: "0",
//         requestor: "Alex December",
//         products: [
//             {
//                 id: "1",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//             {
//                 id: "2",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//         ]
//     },
//     {
//         id: "1111-1111-1116",
//         date: `${moment()}`,
//         status: "0",
//         requestor: "Alex December",
//         products: [
//             {
//                 id: "1",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//             {
//                 id: "2",
//                 name: "Tv ABOBA s22",
//                 amount: 2,
//             },
//         ]
//     },
// ]

// export const TransactionsMock: Transaction[] = [
//     {
//         id: "1113-1112-1115",
//         activity: "Funds received",
//         date: `${moment()}`,
//         amount: 500,
//     },
//     {
//         id: "1113-1112-1215",
//         activity: "Product purchasing",
//         date: `${moment()}`,
//         amount: -1250,
//     },
// ]