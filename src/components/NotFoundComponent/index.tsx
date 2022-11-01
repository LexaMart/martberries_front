import React from "react";
import "./index.scss";

export const NotFoundComponent = ({ ...props }) => {
    return (
        <div className="not-found">
            <p className="not-found__text">
                404 Page Not Found!
            </p>
        </div>
    )
}