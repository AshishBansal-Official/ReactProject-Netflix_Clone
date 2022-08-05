import React, { useEffect } from "react";
import { Header, Body, Footer } from "./components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.value);

    useEffect(() => {
        if (user.username !== "") {
            navigate("/browse");
        }
    }, [user, navigate]);

    return (
        <div>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Home;
