import React, { useState } from "react";
import './index.scss';

export const SubmitOrderForm = ({ closeFunc }: { closeFunc: Function }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [addInfo, setAddInfo] = useState("");


    const closeForm = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        event.preventDefault();
        closeFunc(false);
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case "name":
                setName(event.target.value);
                break;
            case "phone":
                setPhone(event.target.value);
                break;
            default:
                break
        }
    }
    const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddInfo(event.target.value)
    }

    return (
        <div onClick={closeForm} className="shadow">
            <div onClick={(e) => e.stopPropagation()} className="form">
                <div className="form__title">Personal Data</div>
                <div className="form__inputs">
                    <input id="name" value={name} onChange={onInputChange} className="form__inputs__input" placeholder="Your Name" />
                    <input id="phone" value={phone} onChange={onInputChange} className="form__inputs__input" placeholder="Your Phone" />
                    <textarea id="add-info" value={addInfo} onChange={onTextAreaChange} className="form__inputs__text" placeholder="Additional Info" />
                </div>
                <div className={"form__btns"}><div className={ name && phone ? "form__btns__btn" : "form__btns__btn disabled-btn"}>Submit Order</div></div>
            </div>
        </div>
    )
}