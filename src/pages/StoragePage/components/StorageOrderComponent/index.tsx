import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StorageOrderType } from '../../../../types/componentsType';
import { Product } from '../../../../types/storeTypes';
import { getReadableStatuses } from '../../../../utils/orderUtils';
import { StorageDataItem } from './components/DataItem';
import './index.scss';

export const StorageOrderComponent = ({ order, products }: StorageOrderType) => {
    const [isDetails, setIsDetails] = useState(false);
    useEffect(() => {
    },[])
    return (
        <div onMouseEnter={() => { setIsDetails(true) }} onMouseLeave={() => { setIsDetails(false) }} style={isDetails ? { height: "250px" } : { height: "35px" }} className="order-row">
            <div className='order'>
                <div className="order__id">{order.id}</div>
                <div className="order__requestor">{order.customerName}</div>
                <div className="order__data">{moment(order.submittedDateTime).format("DD-MM-YYYY")}</div>
                <div className="order__status">{getReadableStatuses(order.orderStatus)}</div>
            </div>
            <div className={isDetails ? "appear details" : "details"}>
                {order.orderedProducts?.length ? order.orderedProducts.map(el =>
                    <StorageDataItem orderedProduct={el} products={products} orderId={order.id}/>
                    ) : <></>}
            </div>
        </div>
    )
}