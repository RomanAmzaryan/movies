const SliderDots = ({ movies, handleSlide, activeIndex }) => {
    return (
        <div className="first_slider_dots">
            {movies.map((_, index) => {
                return (
                    <span
                        key={index}
                        onClick={() => handleSlide(index)}
                        className={`dot ${
                            activeIndex === index ? "activeDot" : ""
                        }`}
                    ></span>
                );
            })}
        </div>
    );
};

export default SliderDots;
