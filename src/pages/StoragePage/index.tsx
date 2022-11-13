import React, { useEffect } from 'react';
import { getStorageOrdersList } from '../../store/reducers/OrdersReducer.tsx/ordersReducer';
import { getProductsList } from '../../store/reducers/StoreReducer/storeReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { StorageOrderComponent } from './components/StorageOrderComponent';
import './index.scss';

export const StoragePage = ({ ...props }) => {
    const dispatch = useAppDispatch();
    const { productsList } = useAppSelector(store => store.storeReducer);
    const { storageOrders } = useAppSelector(store => store.ordersReducer);

    useEffect(() => {
        dispatch(getProductsList());
        dispatch(getStorageOrdersList());
    }, [])
    return (
        <div className='table'>
            {storageOrders.length ? storageOrders.map(el => <StorageOrderComponent order={el} products={productsList}/>) : <></> }
        </div>
    )
}