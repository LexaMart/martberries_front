import moment from "moment";
import React, { useState } from "react";
import { Functions } from "../../constants/constants";
import { changeOrderStatus, deleteOrder, submitOrderRequestedMoney } from "../../store/reducers/OrdersReducer.tsx/ordersReducer";
import { useAppDispatch } from "../../store/store";
import { OrderItemComponent } from "../../types/componentsType";
import { getReadableStatuses } from "../../utils/orderUtils";
import './index.scss';

export const OrderItem = ({ order, statusToChange, role }: OrderItemComponent) => {
    const dispatch = useAppDispatch();
    const [isDetails, setIsDetails] = useState<boolean>(false);
    const [requestedMoney, setRequestedMoney] = useState<number>(order.requestedMoney);
    const changeStatus = (): void => {
        if (getRoleConfirmCondition()) {
            dispatch(changeOrderStatus({ id: order.id, statusId: statusToChange }))
        }
    }
    const handleDeleteOrder = (): void => {
        dispatch(deleteOrder({ id: order.id }))
    }

    const changeRequested = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setRequestedMoney(+event.target.value)
    }

    const submitRequestedMoney = (): void => {
        dispatch(submitOrderRequestedMoney({ id: order.id, requestedMoney: requestedMoney }))
    }
    const getRoleConfirmCondition = (): boolean => {
        switch (role) {
            case Functions.admin:
                if (order.orderStatus === 0) {
                    return true;
                } else {
                    return false
                }
            case Functions.accaunting:
                if (order.orderStatus === 2) {
                    return true;
                } else {
                    return false;
                }
            case Functions.delivery:
                if (order.orderStatus === 4) {
                    return true;
                } else {
                    return false
                }
            default:
                return false;
        }
    }
    return (
        <div onMouseEnter={() => { setIsDetails(true) }} onMouseLeave={() => { setIsDetails(false) }} style={isDetails ? { height: "250px" } : { height: "35px" }} className={order.orderStatus === 5 ? "order-row finished" : "order-row"}>
            <div className="order">
                <div className="order__id">{order.id}</div>
                <div className="order__requestor">{order.customerName}</div>
                <div className="order__data">{moment(order.submittedDateTime).format("DD-MM-YYYY")}</div>
                <div className="order__info"><span>{order.customerAdditionalInfo}</span></div>
                <div className="order__status">{getReadableStatuses(+order.orderStatus)}</div>
            </div>
            {isDetails ?
                <div className={isDetails ? "appear details" : "details"}>

                    <div className="details__add-info">
                        {order.orderedProducts?.map(el => <div className="details__add-info__item">
                            <div className="details__add-info__item__id">{el.id}</div>
                            <div className="details__add-info__item__name">{el.name}</div>
                            <div className="details__add-info__item__amount">{el.amount} items</div>
                            <div className="details__add-info__item__amount">{el.price} $</div>
                            {role === Functions.accaunting ? <div className={order.requestedMoney === 0 ? "details__add-info__item__requested error-text" : "details__add-info__item__requested"}> requested {order.requestedMoney}$</div> : null}
                            {role === Functions.accaunting ? <div className={"details__add-info__item__provided"}> submitted <span className={order.submittedMoney === 0 || order.submittedMoney !== order.requestedMoney ? "error-text" : "success-text"}>{order.submittedMoney}$</span></div> : null}
                        </div>)}
                        { }
                    </div>
                    {role === Functions.accaunting ? <div className="details__accauntant-inputs">
                        <input onChange={changeRequested} id="requested-money" className="details__accauntant-inputs__input" value={requestedMoney} placeholder={"Requested Money"} type={"number"} />
                        <label>$ Requested Money</label>
                        <div onClick={submitRequestedMoney} className="details__accauntant-inputs__btn btn-warning">Request Money</div>
                    </div>
                        : null}
                    <div className="details__btns">
                        <div onClick={changeStatus} className={getRoleConfirmCondition() ? "btn-success" : "btn-success disabled-btn"}>Confirm Order</div>
                        {role === Functions.admin ? <div onClick={handleDeleteOrder} className="btn-failure">Reject Order</div> : <></>}

                    </div>
                </div> : <></>}
        </div>
    )
}