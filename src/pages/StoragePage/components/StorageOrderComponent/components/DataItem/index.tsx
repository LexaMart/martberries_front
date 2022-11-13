import { useEffect, useState } from 'react';
import { StorageDataItemType } from '../../../../../../types/componentsType';
import { Product } from '../../../../../../types/storeTypes';
import './index.scss';

export const StorageDataItem = ({ orderedProduct, products }: StorageDataItemType) => {
    const [currentProductObject, setCurrentProductObject] = useState<Product>()
    useEffect(() => {
        setCurrentProductObject(products.find(el => el.id === orderedProduct?.id));
    }, [currentProductObject?.id, orderedProduct, products])
    return (
        <div className='details__item'>
            <div className='details__item__data'>
                {orderedProduct.id}
            </div>
            <div className='details__item__data'>
                {orderedProduct.name}
            </div>
            <div className='details__item__data'>
                {orderedProduct.amount}
            </div>
            <div className='details__item__data status'>
                {currentProductObject && currentProductObject?.amount >= orderedProduct.amount ? <div className='btn-success'>Can Be Ordered</div> : <div className='btn-failure'>Not Enough</div>}
            </div>
        </div>
    )
}