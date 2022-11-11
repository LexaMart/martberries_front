import React, { useEffect } from 'react';
import { getTransactionsList } from '../../../../store/reducers/TransactionsReducer/transactionsReducer';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { TransactionsItemComponent } from './components/TransactionsItemComponent';
import './index.scss';

export const AccountingTransaction = ({ ...props }) => {
    const dispatch = useAppDispatch();
    const { transactionsList } = useAppSelector(store => store.transactionsReducer);
    useEffect(() => {
        dispatch(getTransactionsList());
    }, [])
    return (
        <div className='table'>
            {transactionsList.map(el =>
                <TransactionsItemComponent key={el.id} id={el.id} amount={el.amount} date={el.date} activity={el.activity} />
            )}
        </div>
    )
}