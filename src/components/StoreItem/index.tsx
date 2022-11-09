import React, { useState, useEffect } from 'react';
import { addProductToCart } from '../../store/reducers/StoreReducer/storeReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Product } from '../../types/storeTypes';
import './index.scss';

export const StoreItem = ({ name, price, amount, id }: Product) => {
    const dispatch = useAppDispatch();
    const { userCart } = useAppSelector((store) => store.storeReducer);
    const [orderNumber, setOrderNumber] = useState<number>();
    const [inCart, setInCart] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (+event.target.value >= 0) {
            setOrderNumber(+event.target.value)
        }
    }

    const moveItemToCart = (): void => {
        if (orderNumber) {
            dispatch(addProductToCart({ name, price, amount: orderNumber || 0, id }))
        }
    }

    useEffect(() => {
        if (userCart.find(el => el.id === id)) {
            setInCart(true);
        } else {
            setInCart(false);
        }
    }, [id, userCart])

    return (
        <div className='row'>
            <div className='row__name'>{name}</div>
            <div className='row__price'>{price} $</div>
            <div className='row__amount'>{amount} left</div>
            <div className='row__order'>
                <input disabled={inCart} className='row__order__input' type={'number'} value={orderNumber} onChange={onChange} placeholder={""} />
                {inCart ? <div onClick={moveItemToCart} className='row__order__btn remove'>remove from cart</div> : <div onClick={moveItemToCart} className={orderNumber ? 'row__order__btn' : "row__order__btn disabled"}>To cart</div>}
            </div>
        </div>
    )
}