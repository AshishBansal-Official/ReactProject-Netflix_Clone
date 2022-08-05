import React, { useEffect, useState } from "react";
import { Container } from "./styles/browser_template";
import { Nav, Footer } from "../components";
import { Body } from "./components";
import { useLocation } from "react-router-dom";

const Browse = () => {
    const [showSolidBackground, setShowSolidBackground] = useState(false);
    const location = useLocation();
    const [pathIndex, setPathIndex] = useState(0);

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

    useEffect(() => {
        const path = location.pathname.split("/")[2];
        switch (path) {
            case "home":
                setPathIndex(0);
                break;
            case "tv-shows":
                setPathIndex(1);
                break;
            case "movies":
                setPathIndex(2);
                break;
            case "new-and-popular":
                setPathIndex(3);
                break;
            default:
                setPathIndex(0);
                break;
        }
    }, [location]);

    return (
        <Container>
            <div>
                <Nav
                    showSolidBackground={showSolidBackground}
                    selected={pathIndex}
                ></Nav>
                <Body></Body>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default Browse;
