import React, { useEffect, useState } from "react";
import { Container } from "./styles/browser_template";
import { Nav, Footer } from "../components";
import { Body } from "./components";

const Browse = () => {
    const [showSolidBackground, setShowSolidBackground] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY <= 0) {
                setShowSolidBackground(false);
            } else {
                setShowSolidBackground(true);
            }
            // console.log(window.scrollY);
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <Container>
            <div>
                <Nav showSolidBackground={showSolidBackground}></Nav>
                <Body></Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default Browse;
