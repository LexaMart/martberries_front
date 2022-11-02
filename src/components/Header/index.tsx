import React, {useEffect} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import "./index.scss";

export const Header = ({ ...props }) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('store');
    },[])
    return (
        <header>
            <div className="logo">
                MartBerries Systems
            </div>
            <nav className="navigation">
                <NavLink className="navigation__link" style={({isActive}) => isActive ? {opacity: "0.5"} : {opacity : "1"}} to={'/store'}>Store</NavLink>
            </nav>
        </header>
    )
}