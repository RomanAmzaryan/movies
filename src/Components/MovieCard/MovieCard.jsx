import React from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineEye } from "react-icons/ai";
import defaultImg from "../../assets/images/default.png";
import AddToWatchList from "../AddToWatchList/AddToWatchList";

import "./moviecard.css";

const MovieCard = ({ movie }) => {
    const category = new URL(window.location.href).pathname.split("/")[1];

    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate(`/${category}/watch/${id}`);
    };

    return (
        <div key={movie.id} className="movie-card">
            <div className="movie-img">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        alt="movie"
                    />
                ) : (
                    <img src={defaultImg} alt="movie" />
                )}
            </div>
            <div className="movie-info" onClick={() => navigateTo(movie.id)}>
                <AddToWatchList movie={movie} />
                {movie.name ? (
                    <h2 className="movie-title">{movie.name}</h2>
                ) : (
                    <h2 className="movie-title">{movie.title}</h2>
                )}
                <div className="movie-actions">
                    <button className="watch">Watch Now</button>
                </div>
                <span
                    className={`movie-rating ${
                        movie.vote_average > 6.5 ? "green" : "red"
                    }`}
                >
                    {movie.vote_average}
                </span>
                {movie.release_date ? (
                    <span className="movie-release-date">
                        {movie.release_date}
                    </span>
                ) : (
                    <span className="movie-release-date">
                        {movie.first_air_date}
                    </span>
                )}
                <span className="movie-popularity">
                    {movie.popularity}
                    <AiOutlineEye />
                </span>
            </div>
        </div>
    );
};

export default MovieCard;
