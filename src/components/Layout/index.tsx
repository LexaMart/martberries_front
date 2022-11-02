import React from "react";
import { Outlet } from 'react-router-dom'
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Provider } from "react-redux";

import "./index.scss";
import store from "../../store/store";

export const Layout = ({ ...props }) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="outlet">
                <Provider store={store}>
                    <Outlet />
                </Provider>
            </div>
            <Footer />
        </div>
    )
}