import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "../../store/Slices/movies/moviesSlice";
import { actionGetMovies } from "../../store/Slices/movies/action";

import "./filterbuttons.css";
const FilterButtons = () => {
  
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    const handleSort = (type) => {
        let sortedMovies;
        switch (type) {
            case "byRate":
                sortedMovies = [...movies].sort(
                    (a, b) => b.vote_average - a.vote_average
                );
                break;
            case "byPopularity":
                sortedMovies = [...movies].sort(
                    (a, b) => b.popularity - a.popularity
                );
                break;
            case "byDate":
                sortedMovies = [...movies].sort((a, b) => {
                    const dateA = a.release_date
                        ? a.release_date
                        : a.first_air_date;
                    const dateB = b.release_date
                        ? b.release_date
                        : b.first_air_date;
                    return Date.parse(dateB) - Date.parse(dateA);
                });
                break;
            default:
                return movies;
        }
        dispatch(actionGetMovies(sortedMovies));
    };

    return (
        <div className="filter-movies">
            <span className="filter">Filter by: </span>
            <div className="filter-buttons">
                <button onClick={() => handleSort("byDate")}>date</button>
                <button onClick={() => handleSort("byRate")}>raiting</button>
                <button onClick={() => handleSort("byPopularity")}>
                    popularity
                </button>
            </div>
        </div>
    );
};

export default FilterButtons;
