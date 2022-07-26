import React from "react";
import { Container, Background, Overlay, Content } from "./styles/container";
import { Nav, Body, Footer } from "./components";

const Login = () => {
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
