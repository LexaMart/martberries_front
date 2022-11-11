import moment from "moment";
import React, { useState } from "react";
import { Order } from "../../types/ordersTypes";
import './index.scss';

export const OrderItem = ({ id, date, status, requestor }: Order) => {
    const [isDetails, setIsDetails] = useState<boolean>(false);
    return (
        <div onMouseEnter={() => { setIsDetails(true) }} onMouseLeave={() => { setIsDetails(false) }} style={isDetails ? { height: "250px" } : { height: "35px" }} className="order-row">
            <div className="order">
                <div className="order__id">{id}</div>
                <div className="order__requestor">{requestor}</div>
                <div className="order__data">{moment(date).format("DD-MM-YYYY")}</div>
                <div className="order__status">{status}</div>
            </div>
            {isDetails ?
                <div className={isDetails ? "appear details" : "details"}>
                    <div className="details__add-info">
                        <div className="details__add-info__item">
                            Add Info 1
                        </div>
                        <div className="details__add-info__item">
                            Add Info 2
                        </div>
                        <div className="details__add-info__item">
                            Add Info 3
                        </div>
                        <div className="details__add-info__item">
                            Add Info 4
                        </div>
                        <div className="details__add-info__item">
                            Add Info 5
                        </div>
                    </div>
                    <div className="details__btns">
                        <div className="btn-success">Confirm Order</div>
                    </div>
                </div> : <></>}
        </div>
    )
}