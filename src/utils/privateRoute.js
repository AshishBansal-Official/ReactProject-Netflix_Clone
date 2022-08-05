import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ Element, ...rest }) => {
    const user = useSelector((state) => state.user.value);

    return user.uid !== "" ? (
        <Element {...rest} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
