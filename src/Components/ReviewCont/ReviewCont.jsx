import React, { useState } from "react";
import user from "../../assets/images/user.png";

import "./reviewcont.css";
const ReviewCont = ({ review }) => {
    const [openComment, setOpenComment] = useState("");
    const toogleOpenComment = (id) => {
        setOpenComment(id === openComment ? "" : id);
    };
    return (
        <div className="review-cont">
            <div className="author-info">
                <div className="author-img">
                    <img src={user} alt="user" className="user-img" />
                </div>
                <div className="author-details">
                    <h3 className="author-name">
                        {review.author_details.name}
                    </h3>
                    <span className="author-username">
                        @{review.author_details.username}
                    </span>
                </div>
            </div>
            <div className="review-content-cont">
                <p
                    className={`review-content ${
                        review.id === openComment ? "open" : ""
                    }`}
                    onClick={() => toogleOpenComment(review.id)}
                >
                    {review.content}
                </p>
            </div>
        </div>
    );
};

export default ReviewCont;
