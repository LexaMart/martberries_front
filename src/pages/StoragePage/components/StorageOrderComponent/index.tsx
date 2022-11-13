import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StorageOrderType } from '../../../../types/componentsType';
import { Product } from '../../../../types/storeTypes';
import { StorageDataItem } from './components/DataItem';
import './index.scss';

export const StorageOrderComponent = ({ order, products }: StorageOrderType) => {
    const [isDetails, setIsDetails] = useState(true);
    useEffect(() => {
    },[])
    return (
        <div onMouseEnter={() => { setIsDetails(true) }} onMouseLeave={() => { setIsDetails(false) }} style={isDetails ? { height: "250px" } : { height: "35px" }} className="order-row">
            <div className="order__id">{order.id}</div>
            <div className='order'>
                <div className="order__requestor">{order.requestor}</div>
                <div className="order__data">{moment(order.date).format("DD-MM-YYYY")}</div>
                <div className="order__status">{order.status}</div>
            </div>
            <div className={isDetails ? "appear details" : "details"}>
                {order.products?.length ? order.products.map(el =>
                    <StorageDataItem orderedProduct={el} products={products}/>
                    ) : <></>}
            </div>
        </div>
    )
}