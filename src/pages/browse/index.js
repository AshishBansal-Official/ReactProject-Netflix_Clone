import React from "react";
import { Container } from "./styles/browser_template";
import { Nav, Footer } from "../components";
import { Body } from "./components";

const Browse = () => {
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
