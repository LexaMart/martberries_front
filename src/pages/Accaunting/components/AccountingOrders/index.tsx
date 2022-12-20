import React, { useEffect } from 'react';
import { OrderItem } from '../../../../common-components/OrderItem';
import { Functions } from '../../../../constants/constants';
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
            {accountingOrders.map(el => <OrderItem key={el.id + 1} order={el} statusToChange={3} role={Functions.accaunting} />)}
        </div>
    )
}