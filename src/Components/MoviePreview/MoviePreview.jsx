import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentMovie } from "../../store/Slices/currentMovie/currentMovieSlice";
import { actionFetchCurrentMovie } from "../../store/Slices/currentMovie/action";

import defaultImg from "../../assets/images/default.png";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import SimiliarMovies from "../SimiliarMovies/SimiliarMovies";

import "./moviepreview.css";
import AddToWatchList from "../AddToWatchList/AddToWatchList";
const MoviePreview = () => {
    const currentMovie = useSelector(selectCurrentMovie);
    const dispatch = useDispatch();
    let { id } = useParams();
    const category = new URL(window.location.href).pathname.split("/")[1];
    useEffect(() => {
        dispatch(actionFetchCurrentMovie(category, id));
    }, [id, dispatch, category]);

    return (
        <div className="movie-main-page">
            {currentMovie ? (
                <div className="movie-cont">
                    <div className="movie-bg">
                        {currentMovie.backdrop_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
                                alt=""
                            />
                        ) : (
                            <img src={defaultImg} alt="" />
                        )}
                    </div>
                    <div className="movie-info-cont">
                        <div className="movie-img">
                            <AddToWatchList movie={currentMovie} />

                            {currentMovie.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200/${currentMovie.poster_path}`}
                                    alt=""
                                />
                            ) : (
                                <img src={defaultImg} alt="" />
                            )}
                        </div>
                        <div className="movie-overview">
                            {currentMovie.name ? (
                                <>
                                    <h2>{currentMovie.name}</h2>
                                </>
                            ) : (
                                <>
                                    <h2>{currentMovie.original_title}</h2>
                                </>
                            )}
                            <span className="movie-tagline">
                                <p>{currentMovie.tagline}</p>
                            </span>
                            <span className="genres-box">
                                Genres:
                                <ul className="movie-genres-list">
                                    {currentMovie.genres?.map((genre) => {
                                        return (
                                            <li
                                                key={genre.id}
                                                className="overview-details"
                                            >
                                                {genre.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </span>
                            <span>
                                Duration:
                                {currentMovie.episode_run_time ? (
                                    <span className="overview-details">
                                        {currentMovie.episode_run_time} min
                                    </span>
                                ) : (
                                    <span className="overview-details">
                                        {currentMovie.runtime} min
                                    </span>
                                )}
                            </span>
                            {currentMovie.budget && currentMovie.revenue ? (
                                <span className="budget">
                                    <span>
                                        Budget:
                                        <span className="overview-details">
                                            {currentMovie.budget}$
                                        </span>
                                    </span>
                                    <span>
                                        Profit:
                                        <span className="overview-details">
                                            {currentMovie.revenue}$
                                        </span>
                                    </span>
                                </span>
                            ) : null}

                            {currentMovie.number_of_episodes &&
                            currentMovie.number_of_seasons ? (
                                <span className="movie-episodes">
                                    <span>
                                        Seasons:
                                        <span className="overview-details">
                                            {currentMovie.number_of_seasons}
                                        </span>
                                    </span>
                                    <span>
                                        Episodes:
                                        <span className="overview-details">
                                            {currentMovie.number_of_episodes}
                                        </span>
                                    </span>
                                </span>
                            ) : null}
                            <span>
                                Released at:
                                {currentMovie.first_air_date ? (
                                    <span className="overview-details">
                                        {currentMovie?.first_air_date}
                                    </span>
                                ) : (
                                    <span className="overview-details">
                                        {currentMovie?.release_date}
                                    </span>
                                )}
                            </span>
                            <span>
                                Original language:{" "}
                                <span className="overview-details original-language">
                                    {" "}
                                    {currentMovie.original_language}{" "}
                                </span>
                            </span>
                            <span>
                                Overview:{" "}
                                <p className="overview-details">
                                    {" "}
                                    {currentMovie.overview}{" "}
                                </p>{" "}
                            </span>
                        </div>
                    </div>
                    <div className="movie-preview-bottom">
                        <MovieTrailer id={id} category={category} />
                        <SimiliarMovies />
                    </div>
                </div>
            ) : (
                <h1>ERRORRRRR</h1>
            )}
        </div>
    );
};

export default MoviePreview;
