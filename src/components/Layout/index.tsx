import React from "react";
import { Outlet } from 'react-router-dom'
import { Footer } from "../Footer";
import { Header } from "../Header";
import "./index.scss";

export const Layout = ({ ...props }) => {
    return (
        <div className="wrapper">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}