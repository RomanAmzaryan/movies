import React from "react";
import SideBarMenu from "../../Components/SideBarMenu/SideBarMenu";
import { Outlet } from "react-router-dom";

import "./tvshowsmain.css";
const TvShowsMain = () => {
    return (
        <div className="tvshowsmain-cont container">
            <SideBarMenu />
            <Outlet />
        </div>
    );
};

export default TvShowsMain;
