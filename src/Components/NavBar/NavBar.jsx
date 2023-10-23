import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import SearchInput from "../SearchInput/SearchInput";
import defaultUser from "../../assets/images/user.png";
import { selectCurrentUser } from "../../store/Slices/currentUser/currentUser";
import { selectUserAuth } from "../../store/Slices/userAuth/userAuth";
import { useSelector } from "react-redux";
import { RxExit } from "react-icons/rx";
import { FaListUl } from "react-icons/fa";
import WatchlistCont from "../WatchlistCont/WatchlistCont";

import "./navbar.css";
const NavBar = () => {
    const menuItems = ["movie", "tv", "actors", "random movie"];

    const [openWatchlist, setOpenWatchlist] = useState(false);

    const userAuth = useSelector(selectUserAuth);
    const currentUser = useSelector(selectCurrentUser);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div className="navbar-cont ">
            <nav className="navbar container">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>

                    <div className="nav-logo-text-cont">
                        <span className="nav-logo-text">tooin.</span>
                        <span className="nav-logo-text">movies</span>
                    </div>
                </div>
                <div className="nav-menu-cont">
                    <ul className="nav-menu">
                        {menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item}>{item}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="nav-actions">
                    <SearchInput />
                    {userAuth ? (
                        <div className="user-act">
                            <img
                                src={defaultUser}
                                alt=""
                                className="current-user-img"
                            />
                            <span className="user-username">
                                {currentUser.username}
                            </span>
                            <div className="user-menu">
                                <button
                                    onClick={() =>
                                        setOpenWatchlist(!openWatchlist)
                                    }
                                >
                                    <FaListUl />
                                    Watchlist
                                </button>
                                <button onClick={handleLogout}>
                                    <RxExit />
                                    Logout
                                </button>
                                {openWatchlist ? (
                                    <WatchlistCont
                                        setOpenWatchlist={setOpenWatchlist}
                                    />
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
