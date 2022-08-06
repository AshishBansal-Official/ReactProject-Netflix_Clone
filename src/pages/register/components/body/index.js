import React, { useEffect, useState } from "react";
import { InputField, Container } from "./styles/body";
import { auth } from "../../../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../features/user/userSlice";

const Body = ({ email }) => {
    const initialFormData = Object.freeze({
        email: email,
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
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
            const userCredentials = await createUserWithEmailAndPassword(
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
        <Container>
            <div
                style={{
                    maxWidth: "440px",
                    width: "100%",
                    textAlign: "left",
                }}
            >
                <span
                    style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        marginBottom: "24px",
                    }}
                >
                    Create a password to start your membership
                </span>
                <form>
                    <InputField
                        required
                        value={formData.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                    ></InputField>
                    <InputField
                        required
                        value={formData.password}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    ></InputField>
                    <button
                        type="submit"
                        disabled={loading}
                        onClick={handleSubmit}
                    >
                        <span>
                            {!loading && "Register"}
                            {loading && <div class="indicator"> </div>}
                        </span>
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default Body;
