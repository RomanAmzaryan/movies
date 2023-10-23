import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchTopRatedMovies } from "../../store/Slices/topRatedMovies/action";
import { selectTopRatedMovies } from "../../store/Slices/topRatedMovies/topRatedMoviesSlice";

import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./moviesscrollerslider.css";
const MoviesScrollerSlider = () => {
    const topRatedMovies = useSelector(selectTopRatedMovies);
    const category = new URL(window.location.href).pathname.split("/")[1];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchTopRatedMovies(category));
    }, [dispatch, category]);

    const [translateValue, setTranslateValue] = useState(0);
    const buttonRef = useRef(null);

    const handleSlideLeft = () => {
        if (translateValue < topRatedMovies.length) {
            setTranslateValue((x) => x + 150);
            buttonRef.current.lastChild.classList.remove("over");
        } else {
            setTranslateValue(0);
        }
    };

    const handleSlideRight = () => {
        if (translateValue < -(150 * (topRatedMovies.length - 13))) {
            buttonRef.current.lastChild.classList.add("over");
        } else {
            setTranslateValue((x) => x - 150);
            buttonRef.current.firstChild.classList.remove("over");
        }
    };

    const navigate = useNavigate();

    const navigateTo = (id) => {
        navigate(`/${category}/watch/${id}`);
    };
    return (
        <div>
            <div className="second_slider_cont">
                <div
                    className="second_slider"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: "all 1s",
                    }}
                >
                    {topRatedMovies.map((movie) => {
                        return (
                            <div
                                key={movie.id}
                                className="second_slider_item"
                                onClick={() => navigateTo(movie.id)}
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt=""
                                />

                                {movie.title ? (
                                    <p>{movie.title}</p>
                                ) : (
                                    <p>{movie.name}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div ref={buttonRef}>
                    <button className="left" onClick={handleSlideLeft}>
                        <AiOutlineArrowLeft />
                    </button>
                    <button className="right" onClick={handleSlideRight}>
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoviesScrollerSlider;
