import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, RightPane, NavLink } from "./styles/nav";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../features/user/userSlice";

const Nav = ({ showTrailing = true, height = "56px", selected = 0 }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState(selected);
    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log("Signed Out");
            dispatch(resetUser());
            navigate("/", { replace: true });
        } catch (error) {
            alert(
                `${
                    error.message.split("Firebase: ")[1].split("(")[0]
                }: ${error.message
                    .split("Firebase: ")[1]
                    .split("(")[1]
                    .split("/")[1]
                    .split(")")[0]
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}`
            );
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
            <div style={{ width: "100%", margin: "0px 20px" }}>
                <NavLink selected={selectedPage === 0}>
                    <Link to="">Home</Link>
                </NavLink>
                <NavLink selected={selectedPage === 1}>
                    <Link to="">TV Shows</Link>
                </NavLink>
                <NavLink selected={selectedPage === 2}>
                    <Link to="">Movies</Link>
                </NavLink>
                <NavLink selected={selectedPage === 3}>
                    <Link to="">New & Popular</Link>
                </NavLink>
            </div>
            {!showTrailing ? (
                ""
            ) : (
                <RightPane>
                    <button disabled={loading} onClick={() => handleSignOut()}>
                        <span>
                            {!loading && "SIGN OUT"}
                            {loading && <div class="indicator"> </div>}
                        </span>
                    </button>
                </RightPane>
            )}
        </Container>
    );
};

export default Nav;
