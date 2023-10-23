import React, { useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectCurrentMovie } from "../../store/Slices/currentMovie/currentMovieSlice";

import "./raitingstars.css";
const RaitingStars = () => {
    const currentMovie = useSelector(selectCurrentMovie);
    const ratingRef = useRef();

    const handleRating = (rating) => {
        const stars = Array.from(ratingRef.current.children);
        stars.forEach((star, index) => {
            if (index <= rating) {
                star.classList.add("rate");
            } else {
                star.classList.remove("rate");
            }
        });
    };

    useEffect(() => {
        handleRating(currentMovie.vote_average);
    }, [currentMovie.vote_average]);

    return (
        <div className="rating-stars-cont">
            <div className="raiting-stars" ref={ratingRef}>
                <span className="rating">Rating: </span>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        className="star"
                        onClick={() => handleRating(index + 1)}
                        key={index}
                    >
                        <AiFillStar />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RaitingStars;
