import React, { useEffect } from "react";
import { MdOutlineRateReview } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectReviews } from "../../store/Slices/reviews/reviewsSlice";
import { actionFetchReviews } from "../../store/Slices/reviews/action";
import SignInButtons from "../SignInButtons/SignInButtons";
import { selectUserAuth } from "../../store/Slices/userAuth/userAuth";
import { selectCurrentUser } from "../../store/Slices/currentUser/currentUser";
import useSendRequests from "../../hook/useSendRequests";
import { selectNewReviews } from "../../store/Slices/newReviews/newReviews";
import { actionFetchNewReviews } from "../../store/Slices/newReviews/action";
import ReviewCont from "../ReviewCont/ReviewCont";

import "./commentsbar.css";
const CommentsBar = () => {
    const { post } = useSendRequests();
    const userAuth = useSelector(selectUserAuth);
    const currentUser = useSelector(selectCurrentUser);
    const newReviews = useSelector(selectNewReviews);

    const category = new URL(window.location.href).pathname.split("/")[1];
    const { id } = useParams();

    const dispatch = useDispatch();
    const reviews = useSelector(selectReviews);

    useEffect(() => {
        dispatch(actionFetchReviews(category, id));
    }, [id, dispatch, category]);

    const handleAddReview = (e) => {
        e.preventDefault();
        const { content } = Object.fromEntries([...new FormData(e.target)]);

        if (content.trim()) {
            const newReview = {
                id: Date.now(),

                movieID: +id,
                content,
                author: currentUser.firstname + currentUser.lastname,
                author_details: {
                    id: +currentUser.id,
                    name: currentUser.firstname + currentUser.lastname,
                    username: currentUser.username,
                },
            };
            post(`http://localhost:3001/reviews`, newReview);
            dispatch(actionFetchNewReviews(id));
        }
        e.target.reset();
    };

    useEffect(() => {
        dispatch(actionFetchNewReviews(id));
    }, [dispatch, id]);

    return (
        <div className="commentsbar-cont">
            <div className="commentsbar">
                {userAuth ? (
                    <div className="commentsbar-top">
                        <form onSubmit={handleAddReview}>
                            <input
                                type="text"
                                name="content"
                                placeholder="Write a comment..."
                            />
                            <button type="submit">
                                <MdOutlineRateReview className="review-icon" />
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="commentsbar-top leave-review-cont">
                        <h2>Sign in to leave a review... </h2>
                        <SignInButtons />
                    </div>
                )}

                {reviews?.length || newReviews?.length ? (
                    <div className="reviews-cont">
                        <h1 className="reviews-title">
                            Reviews : {reviews?.length + newReviews?.length}.
                        </h1>
                        {[...newReviews].reverse()?.map((review) => {
                            return (
                                <div
                                    key={review.id}
                                    className={`review ${
                                        review.author_details.id ===
                                        currentUser.id
                                            ? "my-review"
                                            : null
                                    }`}
                                >
                                    <ReviewCont review={review} />
                                </div>
                            );
                        })}
                        {reviews?.map((review) => {
                            return (
                                <div key={review.id} className="review">
                                    <ReviewCont review={review} />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    userAuth ?
                    <div className="first-review">
                        <h2>leave first review {currentUser.firstname}.</h2>
                    </div>
                    :
                    null
                )}
            </div>
        </div>
    );
};

export default CommentsBar;
