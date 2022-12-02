import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SubHeaderComponent } from '../../common-components/SubHeader';
import './index.scss';

export const PurchasingPage = ({...props}) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('./orders')
    }, [])
    return (
        <div className=''>
            <SubHeaderComponent links={[{ linkName: 'Orders', linkTo: "./orders" }, { linkName: "Money Transactions", linkTo: "./transactions" }]} />
            <div className='accounting__content'>
                <Outlet></Outlet>
            </div>
        </div>
    )}