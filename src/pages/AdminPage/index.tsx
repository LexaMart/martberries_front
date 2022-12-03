import React, { useEffect, useState } from 'react'
import { OrderItem } from '../../common-components/OrderItem';
import { Functions } from '../../constants/constants';
import { getAdminOrdersList } from '../../store/reducers/OrdersReducer.tsx/ordersReducer';
import { useAppDispatch, useAppSelector } from '../../store/store'
import './index.scss'

export const AdminPage = ({ ...props }) => {
    const { adminOrders } = useAppSelector((store) => store.ordersReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAdminOrdersList());
    }, [])
    return (
        <>
            <div className='table'>
                {adminOrders.map(el => <OrderItem key={el.id} order={el} statusToChange={1} role={Functions.admin} />)}
            </div>
        </>
    )
}