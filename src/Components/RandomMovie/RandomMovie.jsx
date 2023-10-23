import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchRandomMovie } from "../../store/Slices/randomMovie/action";
import { Link } from "react-router-dom";
import { selectRandomMovie } from "../../store/Slices/randomMovie/randomMovieSlice";
import defaultBg from "../../assets/images/bg.jpg";

import "./randommoive.css";
const RandomMovie = () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const randomPage = Math.floor(Math.random() * pages.length) + 1;
    const dispatch = useDispatch();
    const randomMovie = useSelector(selectRandomMovie);

    useEffect(() => {
        dispatch(actionFetchRandomMovie(randomPage));
    }, []);

    return (
        <div className="container">
            {randomMovie ? (
                <div className="random-movie-cont">
                    <div className="random-movie-bg">
                        {randomMovie.backdrop_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
                                alt="randommovie"
                                loading="lazy"
                            />
                        ) : (
                            <img src={defaultBg} alt="" />
                        )}
                    </div>
                    <div className="random-movie-title">
                        <h1>{randomMovie.title}</h1>
                        <Link to={`/movie/watch/${randomMovie.id}`}>
                            <button className="watch">Watch now</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="random-mpovie-cont">
                        <h1>Ooops:{"("}</h1>
                        <p>please try again </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RandomMovie;
