import React, { useState } from "react";
import { Order } from "../../types/ordersTypes";
import './index.scss';

export const OrderItem = ({ id, date ,status ,requestor } : Order) => {
    const [isDetails, setIsDetails] = useState<boolean>(false);
    return (
    <div className="order">

    </div>
    )
}