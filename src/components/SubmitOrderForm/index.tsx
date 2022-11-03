import React from "react";
import './index.scss';

export const SubmitOrderForm = ({ closeFunc }: { closeFunc: Function }) => {
    const closeForm = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        closeFunc(false);
    }
    return (
        <div onClick={closeForm} className="shadow">
            <div className="form">
                <div className="form__title">Personal Data</div>
                <div className="form__inputs">
                    <input className="form__inputs__input" />
                </div>
            </div>
        </div>
    )
}