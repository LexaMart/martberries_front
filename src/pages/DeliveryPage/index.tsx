import React, { useEffect } from 'react';
import { OrderItem } from '../../common-components/OrderItem';
import { Functions } from '../../constants/constants';
import { getDeliveryOrdersList } from '../../store/reducers/OrdersReducer.tsx/ordersReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './index.scss';

export const DeliveryPage = () => {
    const dispatch = useAppDispatch();
    const { deliveryOrders } = useAppSelector(store => store.ordersReducer);
    useEffect(() => {
        dispatch(getDeliveryOrdersList());
    }, [])
    return (
        <>
            <div className='table'>
                {deliveryOrders.map(el => <OrderItem key={el.id} order={el} statusToChange={5} role={Functions.delivery} />)}
            </div>
        </>
    )
}