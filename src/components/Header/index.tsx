import React, {useEffect} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppSelector } from "../../store/store";
import cart from '../../assets/svg/cart.svg'
import "./index.scss";

export const Header = ({ ...props }) => {
    const navigate = useNavigate();
    const { userCart } = useAppSelector((store) => store.storeReducer);

    useEffect(() => {
        navigate('store');
    },[])
    return (
        <header>
            <div className="logo">
                MartBerries Systems
            </div>
            <nav className="navigation">
                {userCart.length  ? (<NavLink className="navigation__link svg" style={({isActive}) => isActive ? {opacity: "0.5"} : {opacity : "1"}} to={'./cart'}><img src={cart} alt="cart"/></NavLink>) : <></>}
                <NavLink className="navigation__link" style={({isActive}) => isActive ? {opacity: "0.5"} : {opacity : "1"}} to={'/store'}>Store</NavLink>
            </nav>
        </header>
    )
}