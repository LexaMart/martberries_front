import React, { useState } from 'react'
import { CartItem } from '../../components/CartItem';
import { SubmitOrderForm } from '../../components/SubmitOrderForm';
import { useAppSelector } from '../../store/store';
import './index.scss'

export const Cart = ({ ...props }) => {
    const [isForm, setIsForm] = useState(false);
    const { userCart } = useAppSelector((store) => store.storeReducer);
    const openForm = () => {
        setIsForm(!isForm);
    }
    return (
        <>
        {isForm ? <SubmitOrderForm closeFunc={setIsForm}/> : <></>}
        <div className='table'>
            {userCart.map((el, index) => {
                return (
                    <CartItem key={index} name={el.name} price={el.price} amount={el.amount} id={el.id} />
                )
            })}
        </div>
        <div onClick={openForm} className='create-order'><div className='create-order__btn'>Create Order</div></div>
        </>
    )
}