import { OrderStatusesToReadable } from "../constants/constants"

export const getReadableStatuses = (statusNum: number): string => {
    switch (statusNum) {
        case 0:
            return OrderStatusesToReadable[0];
        case 1:
            return OrderStatusesToReadable[1]
        default: 
            return OrderStatusesToReadable[0];
    }
}