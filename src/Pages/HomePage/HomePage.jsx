import React from "react";
import SignInButtons from "../../Components/SignInButtons/SignInButtons";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/Slices/currentUser/currentUser";
import { selectUserAuth } from "../../store/Slices/userAuth/userAuth";

import "./homepage.css";
const HomePage = () => {
    const authUser = useSelector(selectUserAuth);
    const currentUser = useSelector(selectCurrentUser);
    return (
        <div>
            <header>
                <div className="header-bg-img"></div>
                <div className="header-intro">
                    <div className="header-intro-text">
                        {authUser ? (
                            <h2 className="welcome-text">
                                Welcome
                                <span> {currentUser.firstname}</span> jan!
                            </h2>
                        ) : null}
                        <h1>Unlimited movies, cartoons, TV shows, and more.</h1>
                        <p>Watch anywhere :{")"}</p>
                    </div>
                    <SignInButtons />
                </div>
            </header>
        </div>
    );
};

export default HomePage;
