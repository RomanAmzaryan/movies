import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { selectNowPlayingMovies } from "../../store/Slices/nowPlayingMovies/nowPlayingMoviesSlice";
import { actionFetchNowPlayingMovies } from "../../store/Slices/nowPlayingMovies/action";

import MovieCard from "../MovieCard/MovieCard";
import "./nowplayingmovies.css";
const NowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(selectNowPlayingMovies);
    const category = new URL(window.location.href).pathname.split("/")[1];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionFetchNowPlayingMovies(category));
    }, [dispatch, category]);

    const navigate = useNavigate();

    const navigateTo = (id) => {
        navigate(`/${category}/watch/${id}`);
    };
    return (
        <div className="container now-playing-movies-page">
            <div className="movies-cont">
                <h1 className="now-playing-title">Now playing:</h1>
                <div className="movies now-playing-movies">
                    {nowPlayingMovies.map((movie) => {
                        return (
                            <div
                                key={movie.id}
                                onClick={() => navigateTo(movie.id)}
                            >
                                <MovieCard movie={movie} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default NowPlayingMovies;
