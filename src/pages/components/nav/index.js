import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, RightPane } from "./styles/nav";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../features/user/userSlice";

const Nav = ({ showTrailing = true, height = "56px" }) => {
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("Signed Out");
            dispatch(resetUser());
        } catch (err) {
            console.log(err);
        }
    };

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
                    <button onClick={() => handleSignOut()}>SIGN OUT</button>
                    <a href="#">SIGN OUT</a>
                </RightPane>
            )}
        </Container>
    );
};

export default Nav;
