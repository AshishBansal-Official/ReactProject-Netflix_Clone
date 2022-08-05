import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Background,
    Overlay,
    Nav,
    Logo,
    Pane,
    LangSelector,
    SignInButton,
    Content,
    FormContainer,
    InputField,
    GetStartedButton,
} from "./styles/header";

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        const emailElement = document.getElementById("home_header_email");
        const email = emailElement.value;
        navigate("/register", { state: { email: email } });
    };

    return (
        <>
            <Container>
                <Background></Background>
                <Overlay></Overlay>
                <Nav>
                    <Logo src="../images/logo.svg"></Logo>
                    <Pane>
                        <LangSelector>
                            <option value="">English</option>
                        </LangSelector>
                        <Link to="/login">
                            <SignInButton>Sign In</SignInButton>
                        </Link>
                    </Pane>
                </Nav>
                <Content>
                    <h1>
                        Unlimited movies, TV <br />
                        shows and more.
                    </h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <span>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </span>
                    <FormContainer>
                        <InputField
                            id="home_header_email"
                            type="text"
                            placeholder="Email address"
                        ></InputField>
                        <GetStartedButton onClick={() => handleClick()}>
                            <span>Get Started</span>
                            <img
                                src="../images/icons/chevron-right.png"
                                alt=""
                            />
                        </GetStartedButton>
                    </FormContainer>
                </Content>
            </Container>
        </>
    );
};

export default Header;
