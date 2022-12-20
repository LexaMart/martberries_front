import React, { useEffect } from 'react';
import { getProductTransactions } from '../../../../store/reducers/TransactionsReducer/transactionsReducer';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { ProductItemComponent } from './components/ProductTraItemComponent';
import './index.scss';

export const ProductTransaction = ({ ...props }) => {
    const dispatch = useAppDispatch();
    const { productTransactions } = useAppSelector(store => store.transactionsReducer);
    useEffect(() => {
        dispatch(getProductTransactions());
    }, [dispatch])
    return (
        <div className='table'>
            {productTransactions.map(el =>
                <ProductItemComponent key={el.id} id={el.id} amount={el.amount} transferDateTime={el.transferDateTime} transferType={el.transferType} product={el.product} />
            )}
        </div>
    )
}