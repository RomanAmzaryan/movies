import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUserAuth } from "../../store/Slices/userAuth/userAuth";

import "./signinbuttons.css";
const SignInButtons = () => {
    const userAuth = useSelector(selectUserAuth);
    return userAuth ? null : (
        <div>
            <div className="signin-buttons">
                <Link to="/sign-up">
                    <button className="sign-up">Sign up</button>
                </Link>
                <Link to="/sign-in">
                    <button className="sign-in">Sign In</button>
                </Link>
            </div>
        </div>
    );
};

export default SignInButtons;
