import React from "react";
import { Wrapper, Container, Form, FormField } from "./styles/body";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <Wrapper>
            <Container>
                <h1>Sign In</h1>
                <Form>
                    <FormField
                        type="text"
                        placeholder="Email or phone number"
                    ></FormField>
                    <FormField
                        type="password"
                        placeholder="Password"
                    ></FormField>
                    <button type="submit">Sign In</button>
                    <div style={{ color: "#B3B3B3", position: "relative" }}>
                        <input
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
                <span style={{ color: "#B3B3B3" }}>
                    New to Netflix?
                    <Link
                        to="/in"
                        style={{ textDecoration: "None", color: "white" }}
                    >
                        {" "}
                        Sign up now.
                    </Link>
                </span>
                <span
                    style={{
                        margin: "13px 0",
                        color: "#B3B3B3",
                        fontSize: "13px",
                    }}
                >
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                </span>
                <span
                    style={{
                        color: "#B3B3B3",
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
