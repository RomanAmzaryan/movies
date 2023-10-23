import React, { useEffect } from "react";
import defaultImg from "../../assets/images/default.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectMovies } from "../../store/Slices/movies/moviesSlice";
import { actionGetMovies } from "../../store/Slices/movies/action";

import "./actorspagesidebar.css";
const ActorsPageSideBar = () => {
    const API_KEY = "b855ed8f8fd0381ce79a264df3f867ff";
    const movies = useSelector(selectMovies);
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`,
                { timeout: 5000 }
            );
            dispatch(
                actionGetMovies(
                    data.results.find((actor) => actor.id == id)?.known_for
                )
            );
        })();
    }, [dispatch, id]);

    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate(`/movie/watch/${id}`);
    };
    return (
        <div className="actors-page-sidebar">
            <div className="actor-sidebar-cont">
                <h2 className="sidebar-title">Popular movies: </h2>
                <div className="actior-popular-movies">
                    {movies ? (
                        movies.map((movie) => {
                            return (
                                <div
                                    key={movie.id}
                                    className="actor-popular-movie"
                                    onClick={() => navigateTo(movie.id)}
                                >
                                    <div className="actor-popular-movie-img">
                                        {movie.poster_path ? (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                                alt=""
                                            />
                                        ) : (
                                            <img src={defaultImg} alt="" />
                                        )}
                                    </div>
                                    <div className="actor-popular-movie-info">
                                        <h2 className="movie-title">
                                            {movie.title}
                                        </h2>
                                        <button className="watch">
                                            Watch Now
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h1 className="popular-title">Not Found:{"("}</h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActorsPageSideBar;
