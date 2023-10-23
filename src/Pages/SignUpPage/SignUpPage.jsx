import React, { useState } from "react";
import "./signuppage.css";
import { Link, useNavigate } from "react-router-dom";
import useSendRequests from "../../hook/useSendRequests";
import { useDispatch } from "react-redux";
import { actionUserAuth } from "../../store/Slices/userAuth/action";
import { actionCurrentUser } from "../../store/Slices/currentUser/action";
const SignUpPage = () => {

    const [mailError, setMailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const navigate = useNavigate();
    const { get, post } = useSendRequests();
    const dispatch = useDispatch();

    const handleSignUp = (e) => {
        e.preventDefault();
        const {
            firstname,
            lastname,
            username,
            email,
            password,
            confirm_password,
        } = Object.fromEntries([...new FormData(e.target)]);
        const newUser = {
            id: Date.now(),
            firstname,
            lastname,
            username,
            email,
            password,
        };
        get(`http://localhost:3001/registeredUsers`).then((data) => {
            const currentUser = data.find((user) => user.email === email);
            if (currentUser) {
                setMailError("Email already registered.");
                return;
            }

            if (password === confirm_password) {
                post(`http://localhost:3001/registeredUsers`, newUser);
                navigate("/");
                localStorage.setItem("userAuth", JSON.stringify(newUser));
                dispatch(actionCurrentUser(newUser));
                dispatch(actionUserAuth(true));
            } else {
                setPasswordError("Passwords are not matching.");
            }
        });
    };
    return (
        <div className="sign-up-page">
            <fieldset className="sign-up-form-container" placeholder="">
                <legend>Sign Up</legend>
                <div className="sign-up-form-title">
                    <h1>tooin.</h1>
                    <span>movies</span>
                </div>
                <form className="sign-up-form" onSubmit={handleSignUp}>
                    <div className="sign-up-input">
                        <input
                            type="text"
                            name="firstname"
                            placeholder=""
                            required
                        />
                        <label htmlFor="firstname">Firstname</label>
                    </div>
                    <div className="sign-up-input">
                        <input
                            type="text"
                            name="lastname"
                            placeholder=""
                            required
                        />
                        <label htmlFor="lastname">Lastname</label>
                    </div>
                    <div className="sign-up-input">
                        <input
                            type="text"
                            name="username"
                            placeholder=""
                            required
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="sign-up-input">
                        <input
                            type="email"
                            name="email"
                            placeholder=""
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    {mailError && <p className="sign-error">{mailError}</p>}
                    <div className="sign-up-input">
                        <input
                            type="password"
                            name="password"
                            placeholder=""
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="sign-up-input">
                        <input
                            type="password"
                            name="confirm_password"
                            placeholder=""
                            required
                        />
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                    </div>
                    {passwordError && (
                        <p className="sign-error">{passwordError}</p>
                    )}
                    <button className="sign-up-btn" type="submit">
                        Sign up
                    </button>
                </form>
                <p className="sign-up-form-message">
                    Already have an account ?
                    <Link to="/sign-in">Sign In :{")"}</Link>
                </p>
            </fieldset>
        </div>
    );
};

export default SignUpPage;
