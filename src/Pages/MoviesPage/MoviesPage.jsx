import React from "react";
import SideBarMenu from "../../Components/SideBarMenu/SideBarMenu";
import { Outlet } from "react-router-dom";

import "./moviespage.css";
const MoviesPage = () => {
    return (
        <div className="movies-page-cont container">
            <SideBarMenu />
            <Outlet />
        </div>
    );
};

export default MoviesPage;
