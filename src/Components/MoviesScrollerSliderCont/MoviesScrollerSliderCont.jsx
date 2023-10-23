import React from "react";
import MoviesScrollerSlider from "../MoviesScrollerSlider/MoviesScrollerSlider";

import "./moviesscrollerslidercont.css";
const MoviesScrollerSliderCont = () => {
    return (
        <div className="second_slider_page">
            <h2 className="scroller-slider-title">Top Rated :</h2>
            <MoviesScrollerSlider />
        </div>
    );
};

export default MoviesScrollerSliderCont;
