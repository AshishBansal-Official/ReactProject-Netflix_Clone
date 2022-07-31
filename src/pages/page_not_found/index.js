import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/nav";
import {
    Background,
    Wrapper,
    Container,
    Header,
    SubHeader,
    BottomText,
} from "./styles/page_not_found";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Nav showTrailing={false} height={"90px"}></Nav>
            <Background></Background>
            <Wrapper>
                <Container>
                    <Header>Lost Your Way?</Header>
                    <SubHeader>
                        Sorry, we can't find that page. You'll find lots to
                        explore on the home page.
                    </SubHeader>
                    <button onClick={() => navigate("/", { replace: "true" })}>
                        Netflix Home
                    </button>
                    <span>
                        Error Code <strong>NSES-404</strong>
                    </span>
                </Container>
            </Wrapper>
            <BottomText>
                FROM <strong>LOST IN SPACE</strong>
            </BottomText>
        </div>
    );
};

export default PageNotFound;
