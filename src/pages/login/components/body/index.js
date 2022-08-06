import React, { useState } from "react";
import { Wrapper, Container, Form, FormField } from "./styles/body";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { auth } from "../../../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../../features/user/userSlice";

const Body = () => {
    const initialFormData = Object.freeze({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Triming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        if (formData.email.trim() === "" || formData.password.trim() === "") {
            return;
        }
        e.preventDefault();
        setLoading(true);
        const email = formData.email;
        const password = formData.password;
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredentials?.user;
            dispatch(setUser({ uid: user?.uid, email: user?.email }));
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
        setLoading(false);
    };

    return (
        <Wrapper>
            <Container>
                <h1>Sign In</h1>
                <Form>
                    <FormField
                        required
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email or phone number"
                    ></FormField>
                    <FormField
                        required
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    ></FormField>
                    <button
                        type="submit"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        <span>
                            {!loading && "Sign In"}
                            {loading && <div className="indicator"> </div>}
                        </span>
                    </button>
                    <div style={{ color: "#B3B3B3", position: "relative" }}>
                        <input
                            required
                            checked
                            style={{
                                backgroundColor: "#B3B3B3",
                                height: "16px",
                                marginRight: "10px",
                                verticalAlign: "middle",
                                position: "relative",
                                bottom: ".08em",
                            }}
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                            onChange={() => {}}
                        />
                        <label htmlFor="rememberMe">Remember Me</label>
                        <a
                            href="#"
                            style={{
                                position: "absolute",
                                textDecoration: "None",
                                color: "#B3B3B3",
                                right: "0",
                            }}
                        >
                            Need Help
                        </a>
                    </div>
                </Form>
                <span style={{ color: "#737373" }}>
                    New to Netflix?
                    <Link
                        to="/"
                        style={{ textDecoration: "None", color: "white" }}
                    >
                        {" "}
                        Sign up now.
                    </Link>
                </span>
                <span
                    style={{
                        margin: "13px 0",
                        color: "#8C8C8C",
                        fontSize: "13px",
                    }}
                >
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                </span>
                <span
                    style={{
                        color: "#8C8C8C",
                        fontSize: "13px",
                    }}
                >
                    The information collected by Google reCAPTCHA is subject to
                    the Google{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "#0080FF",
                            textDecoration: "None",
                            fontSize: "13px",
                        }}
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "#0080FF",
                            textDecoration: "None",
                            fontSize: "13px",
                        }}
                    >
                        Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalised advertising by Google).
                </span>
            </Container>
        </Wrapper>
    );
};

export default Body;
