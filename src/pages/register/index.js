import React, { useEffect } from "react";
import { Header, Body, Footer } from "./components";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Register = () => {
    const location = useLocation();
    const email = location?.state?.email;
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.uid !== "") {
            navigate("/browse");
        }
    }, [user, navigate]);

    return (
        <div
            style={{
                minHeight: "100vh",
                height: "100%",
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header></Header>
            <Body email={email}></Body>
            <Footer></Footer>
        </div>
    );
};

export default Register;
