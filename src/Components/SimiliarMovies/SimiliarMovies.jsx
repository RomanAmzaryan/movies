import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchSimilarMovies } from "../../store/Slices/similarMovies/action";
import { selectSimilarMovies } from "../../store/Slices/similarMovies/similarMoviesSlice";

import { TbArrowBackUp } from "react-icons/tb";
import defaultImg from "../../assets/images/default.png";
import "./similarmovies.css";

const SimiliarMovies = () => {
    const movies = useSelector(selectSimilarMovies);
    const { id } = useParams();
    const category = new URL(window.location.href).pathname.split("/")[1];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchSimilarMovies(category, id));
    }, [id, dispatch, category]);

    const navigate = useNavigate();

    const navigateTo = (id) => {
        navigate(`/${category}/watch/${id}`);
    };

    return (
        <div className="similar-movies-cont">
            {movies?.length ? (
                <div className="similar-movies-main">
                    <h2 className="similar-movies-title">Similar Movies: </h2>
                    <div className="similar-movies">
                        {movies.map((movie) => {
                            return (
                                <div
                                    key={movie.id}
                                    className="similar-movie-card"
                                    onClick={() => navigateTo(movie.id)}
                                >
                                    {movie.poster_path ? (
                                        <img
                                            className="similar-movie-img"
                                            src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            src={defaultImg}
                                            className="similar-movie-img"
                                            alt=""
                                        />
                                    )}
                                    <div className="similar-movie-info"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className="similar-not-found-cont">
                    <h2 className="similar-not-found">
                        Similar Movies not found :{"("}
                    </h2>
                    <button className="watch" onClick={() => navigate(-1)}>
                        Back
                        <TbArrowBackUp />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SimiliarMovies;
