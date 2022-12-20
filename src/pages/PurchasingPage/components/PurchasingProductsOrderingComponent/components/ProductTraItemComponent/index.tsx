import moment from 'moment';
import React, { } from 'react';
import { ProductTransactionComponent } from '../../../../../../types/transactionsType';
import { getProductTransactions } from '../../../../../../utils/orderUtils';
import './index.scss';

export const ProductItemComponent = ({ id, amount, transferDateTime, transferType, product }: ProductTransactionComponent) => {

    return (
        <div className='transaction-item'>
            <div className='transaction-item__id'>{id}</div>
            <div className='transaction-item__activity'>{getProductTransactions(transferType)}</div>
            <div className='transaction-item__date'>{moment(transferDateTime).format("DD-MM-YYYY")}</div>
            <div className='transaction-item__amount'><span className={transferType > 0 ? "above" : "below"}>{amount}</span></div>
            <div className='transaction-item__product'><span>{product.name}</span></div>
        </div>
    )
}