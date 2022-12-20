import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { SubHeaderComponent } from '../../common-components/SubHeader';
import img from '../../assets/svg/excel-svgrepo-com.svg';
import './index.scss';
import { Api } from '../../constants/constants';

export const AccauntingPage = ({ ...props }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('./orders')
    }, [])
    return (
        <div className='accounting'>
            <a href={Api.moneyTransferReport} target={"_blank"} className='excel' rel="noreferrer"><img src={img} alt='report' /></a>
            <SubHeaderComponent links={[{ linkName: 'Orders', linkTo: "./orders" }, { linkName: "Money Transactions", linkTo: "./transactions" }]} />
            <div className='accounting__content'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}