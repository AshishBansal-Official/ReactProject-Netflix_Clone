import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles/header";

const Header = () => {
    return (
        <Container>
            <img
                src="../images/logo.svg"
                style={{ height: "45px", width: "167px" }}
                alt=""
            />
            <Link to="/login">Sign In</Link>
        </Container>
    );
};

export default Header;
