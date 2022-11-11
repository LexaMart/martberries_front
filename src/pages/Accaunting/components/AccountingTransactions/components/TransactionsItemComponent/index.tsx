import moment from 'moment';
import React, { useEffect } from 'react';
import { Transaction } from '../../../../../../types/transactionsType';
import './index.scss';

export const TransactionsItemComponent = ({ id, amount, date, activity }: Transaction) => {
    return (
        <div className='transaction-item'>
            <div className='transaction-item__id'>{id}</div>
            <div className='transaction-item__activity'>{activity}</div>
            <div className='transaction-item__date'>{moment(date).format("DD-MM-YYYY")}</div>
            <div className='transaction-item__amount'><span className={amount > 0 ? "above" : "below"}>{amount}</span></div>
        </div>
    )
}