import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import SliderDots from "../SliderDots/SliderDots";
import { selectMovies } from "../../store/Slices/movies/moviesSlice";
import { actionFetchMovies } from "../../store/Slices/movies/action";

const SliderCont = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    const category = new URL(window.location.href).pathname.split("/")[1];

    useEffect(() => {
        dispatch(actionFetchMovies(category));
    }, [dispatch, category]);

    const handleSlide = (newImgIndex) => {
        if (newImgIndex < 0) {
            newImgIndex = movies.length - 1;
        } else if (newImgIndex > movies.length - 1) {
            newImgIndex = 0;
        }
        setActiveIndex(newImgIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlide(activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div className="first_slider_cont">
            <Slider
                movies={movies}
                handleSlide={handleSlide}
                activeIndex={activeIndex}
            />
            <SliderDots
                movies={movies}
                handleSlide={handleSlide}
                activeIndex={activeIndex}
            />
        </div>
    );
};

export default SliderCont;
