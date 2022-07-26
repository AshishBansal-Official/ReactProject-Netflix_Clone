import React from "react";
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
    return (
        <>
            <Container>
                <Background></Background>
                <Overlay></Overlay>
                <Nav>
                    <Logo src="images/logo.svg"></Logo>
                    <Pane>
                        <LangSelector>
                            <option value="">English</option>
                        </LangSelector>
                        <SignInButton>Sign In</SignInButton>
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
                            type="text"
                            placeholder="Email address"
                        ></InputField>
                        <GetStartedButton>
                            <span>Get Started</span>
                            <img src="images/icons/chevron-right.png" alt="" />
                        </GetStartedButton>
                    </FormContainer>
                </Content>
            </Container>
        </>
    );
};

export default Header;
