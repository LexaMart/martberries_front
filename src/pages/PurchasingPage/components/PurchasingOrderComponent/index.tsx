import React, { useEffect, useState } from 'react';
import { getStorageOrdersList } from '../../../../store/reducers/OrdersReducer.tsx/ordersReducer';
import { getProductsList } from '../../../../store/reducers/StoreReducer/storeReducer';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { PurchasingOrderComponent } from './components/PurchasingOrderItem';
import { PurchasingForm } from './components/PurchasingForm';
import './index.scss';

export const PurchasingOrderPage = ({ ...props }) => {
    const [isForm, setIsForm] = useState(false);
    const dispatch = useAppDispatch();
    const { productsList } = useAppSelector(store => store.storeReducer);
    const { storageOrders } = useAppSelector(store => store.ordersReducer);

    useEffect(() => {
        dispatch(getProductsList());
        dispatch(getStorageOrdersList());
    }, [])
    return (
        <>
            <div className='table'>
                {isForm ? <PurchasingForm closeFunc={setIsForm} /> : <></>}
                {storageOrders.length ? storageOrders.map(el => <PurchasingOrderComponent order={el} products={productsList} />) : <></>}
                <div className='table-btns'>
                    <div onClick={() => { setIsForm(true) }} className='btn-warning'>Order product</div>
                </div>
            </div>
        </>
    )
}