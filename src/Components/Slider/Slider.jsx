import React from "react";
import { Link } from "react-router-dom";

import {
    AiFillPlayCircle,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from "react-icons/ai";

import "./slider.css";
const Slider = ({ movies, handleSlide, activeIndex }) => {
    const category = new URL(window.location.href).pathname.split("/")[1];
    return (
        <div className="first_slider">
            {movies.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{
                            transform: `translate(-${activeIndex * 100}%)`,
                            transition: `all 1.3s ease`,
                        }}
                        className="first_slider_image"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                            alt="slide_img"
                            className={`${
                                activeIndex === index ? "active" : ""
                            }`}
                            onClick={() => handleSlide(index)}
                            onDragEnter={() => handleSlide(index)}
                        />
                        <div className="first_slider_about">
                            <Link
                                className="stream"
                                to={`/${category}/watch/${item.id}`}
                            >
                                Stream now{" "}
                                <AiFillPlayCircle className="stream_btn" />
                            </Link>

                            {item.name ? (
                                <>
                                    <span>{item.name} •</span>
                                </>
                            ) : (
                                <>
                                    <span>{item.original_title} •</span>
                                </>
                            )}
                            <span className="language">
                                {item.original_language}
                            </span>
                        </div>

                        <div className="actions">
                            <span onClick={() => handleSlide(activeIndex - 1)}>
                                <AiOutlineArrowLeft />
                            </span>
                            <span onClick={() => handleSlide(activeIndex + 1)}>
                                <AiOutlineArrowRight />
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
