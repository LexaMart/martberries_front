import React from 'react';
import { NavLink } from 'react-router-dom';
import { SubHeaderType } from '../../types/componentsType';
import './index.scss';

export const SubHeaderComponent = ({ links }: SubHeaderType) => {
    return (
        <div className='sub-header'>
            {links.length && links.map(el => <div className='sub-header__link'><NavLink className="navigation__link" style={({ isActive }) => isActive ? { opacity: "0.5" } : { opacity: "1" }} to={el.linkTo}>{el.linkName}</NavLink></div>
            )}
        </div>
    )
}