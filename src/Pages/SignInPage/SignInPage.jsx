import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSendRequests from "../../hook/useSendRequests";
import { useDispatch } from "react-redux";
import { actionUserAuth } from "../../store/Slices/userAuth/action";
import { actionCurrentUser } from "../../store/Slices/currentUser/action";

import "./signinpage.css";
const SignInPage = () => {
    const [signInError, setSignInError] = useState("");
    const { get } = useSendRequests();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const { login, password } = Object.fromEntries([
            ...new FormData(e.target),
        ]);
        get(`http://localhost:3001/registeredUsers`).then((users) => {
            users.find((user) => {
                if (user.username === login && user.password === password) {
                    localStorage.setItem("userAuth", JSON.stringify(user));
                    dispatch(actionUserAuth(true));
                    dispatch(actionCurrentUser(user));
                    navigate("/");
                    return true;
                } else if (user.username !== login) {
                    setSignInError("User does not exist");
                    return false;
                } else {
                    setSignInError("Invalid Password.");
                    return false;
                }
            });
        });
    };

    return (
        <div className="sign-in-page">
            <fieldset className="sign-in-form-container" placeholder="">
                <legend>Sign In</legend>
                <div className="sign-in-form-title">
                    <h1>tooin.</h1>
                    <span>movies</span>
                </div>
                <form className="sign-in-form" onSubmit={handleSignIn}>
                    <div className="sign-in-input">
                        <input type="text" name="login" placeholder="" />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="sign-in-input">
                        <input type="password" name="password" placeholder="" />
                        <label htmlFor="password">Password</label>
                    </div>
                    {signInError && <p className="sign-error">{signInError}</p>}
                    <button className="sign-in-btn" type="submit">
                        Sign In
                    </button>
                </form>
                <p className="sign-in-form-message">
                    Don't have an account?{" "}
                    <Link to="/sign-up">Sign Up :{")"}</Link>
                </p>
                <p className="sign-in-form-message">
                    Watch without registration. <Link to="/">To Main</Link>
                </p>
            </fieldset>
        </div>
    );
};

export default SignInPage;
