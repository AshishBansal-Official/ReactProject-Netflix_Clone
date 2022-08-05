import React from "react";
import { Container } from "./styles/browser_template";
import { Nav, Footer } from "../components";
import { Body } from "./components";
import { useSelector } from "react-redux";

const Browse = () => {
    const user = useSelector((action) => action.user.value);
    console.log(user);
    return (
        <Container>
            <div>
                <Nav></Nav>
                <Body></Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default Browse;
