import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../services/firebase";

const PrivateRoute = ({ isLoggedIn }) => {
    const user = auth.currentUser;
    const [isBusy, setIsBusy] = useState(true);
    useEffect(() => {
        setIsBusy(true);
        setTimeout(() => setIsBusy(false), 2000);
    }, []);

    return isBusy ? (
        <div>loading...</div>
    ) : user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
