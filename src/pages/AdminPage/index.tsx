import React, { useEffect, useState } from 'react'
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
                hello
            </div>
        </>
    )
}