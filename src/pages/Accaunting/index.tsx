import React, {useEffect} from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './index.scss';

export const AccauntingPage = ({...props}) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('./orders')
    },[])
    return (
        <div className='accounting'>
            <div className='accounting-navigate'>
                <div className='accounting-navigate__link'><NavLink className="navigation__link" style={({isActive}) => isActive ? {opacity: "0.5"} : {opacity : "1"}} to={'./orders'}>Orders</NavLink></div>
                <div className='accounting-navigate__link'><NavLink className="navigation__link" style={({isActive}) => isActive ? {opacity: "0.5"} : {opacity : "1"}} to={'./transactions'}>Money Transactions</NavLink></div>
            </div>
            <div className='accounting__content'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}