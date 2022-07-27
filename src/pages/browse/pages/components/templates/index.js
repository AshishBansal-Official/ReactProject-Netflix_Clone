import React from "react";
import { Container } from "./styles/browser_template";
import { Nav, Body, Footer } from "./components/";

const BrowseTemplate = () => {
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

export default BrowseTemplate;
