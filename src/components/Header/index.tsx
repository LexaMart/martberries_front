import React from "react";
import {Link} from 'react-router-dom'
import "./index.scss";

export const Header = ({...props}) => {
    return (
        <header>
            <div className="logo">
                MartBerries Systems
            </div>
            <nav className="navigation">
                <Link className="navigation__link" to={'store'}>Store</Link>
            </nav>
        </header>
    )
}