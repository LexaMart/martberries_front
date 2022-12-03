import React, { useEffect, useState } from 'react'
import { StoreItem } from './components/StoreItem';
import { getProductsList } from '../../store/reducers/StoreReducer/storeReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './index.scss'
import { TrackingForm } from './components/TrackingForm';

export const Store = ({ ...props }) => {
    const { productsList } = useAppSelector((store) => store.storeReducer);
    const [isForm, setIsForm] = useState(false);
    const dispatch = useAppDispatch();

    const setForm = (): void => {
        setIsForm(true);
    }
    useEffect(() => {
        dispatch(getProductsList());
    }, [dispatch])
    return (
        <>
            {isForm ? <TrackingForm closeFunc={setIsForm}/> : <></>}
            <div className='store-table'>
                {productsList.map((el, index) => {
                    return (
                        <StoreItem key={index} name={el.name} price={el.price} amount={el.amount} id={el.id} />
                    )
                })}
            </div>
            <div onClick={setForm} className='check-order btn-success'>Track Order by Id</div>
        </>
    )
}