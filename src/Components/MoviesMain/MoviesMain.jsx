import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "../../store/Slices/movies/moviesSlice";
import { actionFetchMovies } from "../../store/Slices/movies/action";

import Pagination from "../Pagination/Pagination";

import MovieCard from "../MovieCard/MovieCard";
import { useLocation } from "react-router-dom";
import FilterButtons from "../FilterButtons/FilterButtons";

import "./moviesmain.css";
const MoviesMain = () => {
    const location = useLocation();
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const pagePostsCount = 12;
    const lastPostIndex = currentPage * pagePostsCount;
    const firstPostIndex = lastPostIndex - pagePostsCount;
    const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

    const id = new URL(window.location.href).pathname
        .split("%")[0]
        .split("/")[2];
    const category = new URL(window.location.href).pathname.split("/")[1];

    useEffect(() => {
        dispatch(actionFetchMovies(category, id));
    }, [location.pathname, category, dispatch, id]);

    return (
        <div className="movies-cont">
            <FilterButtons movies={movies} />
            <div className="movies">
                {currentPosts.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <MovieCard movie={movie} category={category} />
                        </div>
                    );
                })}
            </div>
            <Pagination
                movies={currentPosts}
                totalPosts={movies.length}
                pagePostsCount={pagePostsCount}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default MoviesMain;
