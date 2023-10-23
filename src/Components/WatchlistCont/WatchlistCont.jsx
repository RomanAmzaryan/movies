import React from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectWatchlist } from "../../store/Slices/watchlist/watchlistSlice";
import { actionDeleteFromWatchList } from "../../store/Slices/watchlist/action";

import "./watchlistcont.css";
const WatchlistCont = ({ setOpenWatchlist }) => {
    const watchlist = useSelector(selectWatchlist);
    const category = new URL(window.location.href).pathname.split("/")[1];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate(`/${category}/watch/${id}`);
    };

    const handleDeleteMovie = (e, id) => {
        e.stopPropagation();
        dispatch(actionDeleteFromWatchList(id));
    };

    return (
        <div
            className="watchlist-cont"
            onMouseLeave={() => setOpenWatchlist(false)}
        >
            <h1 className="watch-later-title">Watchlist: {watchlist.length}</h1>
            <div className="watchlist">
                {watchlist.map((movie) => {
                    return (
                        <div
                            key={movie.id}
                            className="watchlist-movie"
                            onClick={() => navigateTo(movie.id)}
                        >
                            <div className="watchlist-movie-img">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                    alt=""
                                />
                            </div>
                            <div className="watchlist-movie-info">
                                {movie.title ? (
                                    <span>{movie.title}</span>
                                ) : (
                                    <span>{movie.name}</span>
                                )}
                            </div>
                            <button
                                className="del-btn"
                                onClick={(e) => handleDeleteMovie(e, movie.id)}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WatchlistCont;
