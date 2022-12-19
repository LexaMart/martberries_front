import { useEffect, useState } from 'react';
import { changeOrderStatus } from '../../../../../../../store/reducers/OrdersReducer.tsx/ordersReducer';
import { useAppDispatch } from '../../../../../../../store/store';
import { StorageDataItemType } from '../../../../../../../types/componentsType';
import { Product } from '../../../../../../../types/storeTypes';

import './index.scss';

export const PurchasingDataItem = ({ orderedProduct, products, orderId }: StorageDataItemType) => {
    const [currentProductObject, setCurrentProductObject] = useState<Product>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        setCurrentProductObject(products.find(el => el.name === orderedProduct?.name));

    }, [currentProductObject?.id, orderedProduct, products])

    const handleStorageSubmit = () => {
        if (currentProductObject && currentProductObject?.amount >= orderedProduct.amount) {
            dispatch(changeOrderStatus({ id: orderId, statusId: 3 }))
        } else {

        }
    }
    return (
        <>
            <div className='details-item'>
                <div className='details-item__data'>
                    {orderedProduct.id}
                </div>
                <div className='details-item__data'>
                    {orderedProduct.name}
                </div>
                <div className='details-item__data'>
                    {currentProductObject && currentProductObject?.amount < orderedProduct.amount ? Math.abs((+currentProductObject.amount) - (+orderedProduct.amount)) : 0} <span>Required</span>
                </div>
                <div className='details-item__data status'>
                    {currentProductObject && currentProductObject?.amount >= orderedProduct.amount ? <div className='btn-success'>Can Be Ordered</div> : <div className='btn-failure'>Not Enough</div>}
                </div>
                {/* <div className='details-item__data product'>
                    <div className='btn-warning'>Order product</div>
                </div> */}
            </div>
            <div className='btns'>
            </div>
        </>
    )
}