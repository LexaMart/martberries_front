import React, { useEffect } from 'react'
import { StoreItem } from './components/StoreItem';
import { getProductsList } from '../../store/reducers/StoreReducer/storeReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './index.scss'

export const Store = ({ ...props }) => {
    const { productsList } = useAppSelector((store) => store.storeReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductsList());
    }, [])
    return (
        <div className='store-table'>
            {productsList.map((el, index) => {
                return (
                    <StoreItem key={index} name={el.name} price={el.price} amount={el.amount} id={el.id} />
                )
            })}
        </div>
    )
}