import React from "react";
import SliderCont from "../../Components/SliderCont/SliderCont";
import MoviesScrollerSliderCont from "../../Components/MoviesScrollerSliderCont/MoviesScrollerSliderCont";
import NowPlayingMovies from "../../Components/NowPlayingMovies/NowPlayingMovies";

import "./moviesmainpage.css";
const MoviesMainPage = () => {
    return (
        <div className="movies-main-page">
            <SliderCont />
            <MoviesScrollerSliderCont />
            <NowPlayingMovies />
        </div>
    );
};

export default MoviesMainPage;
