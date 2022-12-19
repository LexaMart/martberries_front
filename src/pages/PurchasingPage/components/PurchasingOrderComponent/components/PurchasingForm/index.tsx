import React, { useState, useEffect } from "react";
import { setTrackingInfo } from "../../../../../../store/reducers/OrdersReducer.tsx/ordersReducer";
import { getSuppliers, postSupplierProduct } from "../../../../../../store/reducers/StoreReducer/storeReducer";
import { useAppDispatch, useAppSelector } from "../../../../../../store/store";
import { Product } from "../../../../../../types/storeTypes";
import './index.scss';

export const PurchasingForm = ({ closeFunc }: { closeFunc: Function }) => {
    const dispatch = useAppDispatch();
    const { suppliers } = useAppSelector(store => store.storeReducer);
    const [supplier, setSupplier] = useState<string>('no');
    const [supplierProductsList, setSuppliersProductsList] = useState<Product[] | undefined>([]);
    const [product, setProduct] = useState<string>('no');
    const [amount, setAmount] = useState<number>();

    const closeForm = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        closeFunc(false);
    };

    useEffect(() => {
        dispatch(getSuppliers());
    }, []);

    const setSupplierValue = (event: any) => {
        setSupplier(event.target.value);
        setSuppliersProductsList(suppliers.find(el => el.id === event.target.value)?.products);
    }

    const setProductValue = (event: any) => {
        setProduct(event.target.value);
    }

    const orderProduct = () => {
        dispatch(postSupplierProduct({
            id: product,
            amount: amount ? amount : 0,
            callback: closeFunc
        }))
        closeFunc(false);
    };

    return (
        <div onClick={closeForm} className="shadow">
            <div onClick={(e) => e.stopPropagation()} className="form">
                <div className="form__title">Products Ordering</div>
                <div className="form__data">
                    <div className="form__data__inputs">
                        <select defaultValue={supplier} onChange={setSupplierValue}>
                            <option disabled={true} value={"no"}>No supplier selected</option>
                            {suppliers.length && suppliers.map((el) => <option value={el.id}>{el.name}</option>)}
                        </select>
                        {supplierProductsList?.length ? <select onChange={setProductValue} defaultValue={product}>
                            <option disabled={true} value={"no"}>No product selected</option>
                            {supplierProductsList.length && supplierProductsList.map((el) => <option value={el.id}>{el.name}</option>)}
                        </select> : <></>}
                        {product !== "no" ? <div className="amount">
                            <input className="amount-input" onChange={(event: any) => setAmount(+event.target.value)} placeholder="Amount" value={amount} type={"number"} />
                            <p>{+(supplierProductsList?.find(el => el.id === product)?.price || 0) * (amount || 0)} $</p>
                        </div> : <></>
                        }
                    </div>
                </div>
                <div onClick={orderProduct} className={"form__btns"}><div className={amount ? "form__btns__btn" : "form__btns__btn disabled-btn"}>Order</div></div>
            </div>
        </div>
    )
}