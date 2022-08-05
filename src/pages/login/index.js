import React, { useEffect } from "react";
import { Container, Background, Overlay, Content } from "./styles/container";
import { Nav, Body, Footer } from "./components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.username !== "") {
            navigate("/browse");
        }
    }, [user, navigate]);

    return (
        <div>
            <Container>
                <Background></Background>
                <Overlay></Overlay>
                <Content>
                    <Nav />
                    <Body />
                    <Footer />
                </Content>
            </Container>
        </div>
    );
};

export default Login;
