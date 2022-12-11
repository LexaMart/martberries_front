import { OrderStatusesToReadable, TransactionsStatusesToReadable } from "../constants/constants"

export const getReadableStatuses = (statusNum: number): string => {
    switch (statusNum) {
        case 0:
            return OrderStatusesToReadable[0];
        case 1:
            return OrderStatusesToReadable[1];
        case 2: 
            return OrderStatusesToReadable[2];
        case 3:
            return OrderStatusesToReadable[3];
        default: 
            return OrderStatusesToReadable[0];
    }
}

export const getTypeTransactionToReadable = (transactionTypeId: number): string => {
    switch (transactionTypeId) {
        case 0:
            return TransactionsStatusesToReadable[0];
        case 1:
            return TransactionsStatusesToReadable[1];
        default:
            return "Unknown Money Transaction"
    }
}