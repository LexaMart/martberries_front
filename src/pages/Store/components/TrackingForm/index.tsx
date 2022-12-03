import moment from "moment";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder, getOrderById, setTrackingInfo, submitOrderProvidedMoney } from "../../../../store/reducers/OrdersReducer.tsx/ordersReducer";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { Product } from "../../../../types/storeTypes";
import { getReadableStatuses } from "../../../../utils/orderUtils";
import './index.scss';

export const TrackingForm = ({ closeFunc }: { closeFunc: Function }) => {
    const dispatch = useAppDispatch();
    const { trackingInfo } = useAppSelector(store => store.ordersReducer);
    const [providedMoney, setProvidedMoney] = useState<number>();
    const [trackNumber, setTrackNumber] = useState("");

    const closeForm = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        dispatch(setTrackingInfo(null))
        closeFunc(false);
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case "trackNumber":
                setTrackNumber(event.target.value);
                break;
            default:
                break
        }
    }

    const submit = () => {
        dispatch(getOrderById({ id: trackNumber }));
    }

    const submitMoney = () => {
        dispatch(submitOrderProvidedMoney({ id: trackingInfo?.id || "", submittedMoney: providedMoney || 0 }))
    }

    const setSubmittedMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProvidedMoney(+event.target.value);
    }

    useEffect(() => {
        if (trackingInfo?.submittedMoney) {
            setProvidedMoney(trackingInfo?.submittedMoney);
        } else {
            setProvidedMoney(0);

        }
    }, [trackingInfo])

    return (
        <div onClick={closeForm} className="shadow">
            <div onClick={(e) => e.stopPropagation()} className="form">
                <div className="form__title">Tracking Data</div>
                <div className="form__data">
                    <div className="form__data__inputs">
                        <input id="trackNumber" value={trackNumber} onChange={onInputChange} className="form__inputs__input" placeholder="Track Number" />
                    </div>
                    {trackingInfo ? <div className="form__data__order-info">
                        <div className="form__data__order-info__item">
                            {trackingInfo.customerName}
                        </div>
                        <div className="form__data__order-info__item">
                            {getReadableStatuses(trackingInfo.orderStatus)}
                        </div>
                        <div className="form__data__order-info__item">
                            {moment(trackingInfo.submittedDateTime).format("YYYY-DD-MM")}
                        </div>
                        <div className="form__data__order-info__item">
                            <div>Requested Money <span>{trackingInfo.requestedMoney} $</span></div>
                        </div>
                        <div className="form__data__order-info__item">
                            <div>Submitted Money <span>{trackingInfo.submittedMoney} $</span></div>
                        </div>
                        <div className="form__data__order-info__item">
                            <div className="form__data__order-info__item__input">
                                <input onChange={setSubmittedMoney} value={providedMoney} id="provided" placeholder="Provided Money" type={"number"} />
                                <label htmlFor="provided">Provided Money</label>
                                <div onClick={submitMoney} className="btn-warning">Submit Money</div>
                            </div>
                        </div>
                    </div> : null}
                </div>
                <div onClick={submit} className={"form__btns"}><div className={trackNumber ? "form__btns__btn" : "form__btns__btn disabled-btn"}>Track Order</div></div>
            </div>
        </div>
    )
}