import moment from 'moment';
import React, { useEffect } from 'react';
import { Transaction } from '../../../../../../types/transactionsType';
import { getTypeTransactionToReadable } from '../../../../../../utils/orderUtils';
import './index.scss';

export const TransactionsItemComponent = ({ id, amount, transferDateTime, transactionType, transactionTypeId }: Transaction) => {
    
    return (
        <div className='transaction-item'>
            <div className='transaction-item__id'>{id}</div>
            <div className='transaction-item__activity'>{getTypeTransactionToReadable(transactionType)}</div>
            <div className='transaction-item__date'>{moment(transferDateTime).format("DD-MM-YYYY")}</div>
            <div className='transaction-item__amount'><span className={transactionType > 0 ? "above" : "below"}>{amount}</span></div>
        </div>
    )
}