import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Iframe from "react-iframe";

import { selectMovieTrailer } from "../../store/Slices/movieTrailer/movieTrailerSlice";
import { actionFetchMovieTrailer } from "../../store/Slices/movieTrailer/action";

import RaitingStars from "../RaitingStars/RaitingStars";

import "./movietrailer.css";
const MovieTrailer = ({ id, category }) => {
  
    const movieTrailer = useSelector(selectMovieTrailer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchMovieTrailer(category, id));
    }, [id, category, dispatch]);

    return (
        <div className="movie-trailer-cont">
            <div className="movie-trailer-box">
                {movieTrailer ? (
                    <Iframe
                        src={`https://youtube.com/embed/${movieTrailer.key}`}
                        title="trailer"
                        width="100%"
                        height="100%"
                        className="movie-trailer-iframe"
                        position="relative"
                    />
                ) : (
                    <h1 className="trailer-error">
                        <span className="trailer-error-404">Error:</span>{" "}
                        Trailer not found. :{"("}
                    </h1>
                )}
            </div>
            <RaitingStars />
        </div>
    );
};

export default MovieTrailer;
