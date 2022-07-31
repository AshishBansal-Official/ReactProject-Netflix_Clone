import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, RightPane } from "./styles/nav";

const Nav = ({ showTrailing = true, height = "56px" }) => {
    return (
        <Container height={height}>
            <Link to="/in/">
                <Logo>
                    <img src="/images/logo.svg" className="img_big" alt="" />
                    <img
                        src="/images/logo_small.svg"
                        className="img_small"
                        alt=""
                    />
                </Logo>
            </Link>
            {!showTrailing ? (
                ""
            ) : (
                <RightPane>
                    <span>UNLIMITED TV SHOWS & MOVIES</span>
                    <button>JOIN NOW</button>
                    <a href="/in/login">SIGN IN</a>
                </RightPane>
            )}
        </Container>
    );
};

export default Nav;
