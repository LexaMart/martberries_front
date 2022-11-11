import React, { useEffect } from 'react';
import { OrderItem } from '../../../../common-components/OrderItem';
import { getAccountingOrdersList } from '../../../../store/reducers/OrdersReducer.tsx/ordersReducer';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import './index.scss';

export const AccountingOrder = ({ ...props }) => {
    const { accountingOrders } = useAppSelector((store) => store.ordersReducer)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAccountingOrdersList());
    }, [])
    return (
        <div className='table'>
            {accountingOrders.map(el => <OrderItem key={el.id + 1} id={el.id} date={el.date} status={el.status} requestor={el.requestor} />)}
        </div>
    )
}