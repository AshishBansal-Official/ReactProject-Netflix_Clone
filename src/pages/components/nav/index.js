import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, RightPane, NavLink } from "./styles/nav";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../features/user/userSlice";

const Nav = ({
    showTrailing = true,
    height = "56px",
    selected,
    showSolidBackground = false,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        <Container height={height} showSolidBackground={showSolidBackground}>
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
                <NavLink selected={selected === 0}>
                    <Link to="home">Home</Link>
                </NavLink>
                <NavLink selected={selected === 1}>
                    <Link to="tv-shows">TV Shows</Link>
                </NavLink>
                <NavLink selected={selected === 2}>
                    <Link to="movies">Movies</Link>
                </NavLink>
                <NavLink selected={selected === 3}>
                    <Link to="new-and-popular">New & Popular</Link>
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
