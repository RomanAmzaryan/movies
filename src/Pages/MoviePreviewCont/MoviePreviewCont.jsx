import React from "react";
import CommentsBar from "../../Components/CommentsBar/CommentsBar";
import { Outlet } from "react-router-dom";

import "./moviepreviewcont.css";
const MoviePreviewCont = () => {
    return (
        <div className="watch-movie-page container">
            <CommentsBar />
            <Outlet />
        </div>
    );
};

export default MoviePreviewCont;
