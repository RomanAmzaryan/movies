import React, { useRef } from "react";
import { TbEyePlus } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { selectWatchlist } from "../../store/Slices/watchlist/watchlistSlice";
import { actionWatchlist } from "../../store/Slices/watchlist/action";

import "./addtowatchlist.css";
import { selectUserAuth } from "../../store/Slices/userAuth/userAuth";
const AddToWatchList = ({ movie }) => {
    const userAuth = useSelector(selectUserAuth);

    const ref = useRef();
    const watchlist = useSelector(selectWatchlist);
    const dispatch = useDispatch();

    const addToWachlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (watchlist.find((m) => m.id === movie.id)) {
            ref.current.innerHTML = "Already added!";
            return;
        } else {
            dispatch(actionWatchlist(movie));
            ref.current.innerHTML = "Added";
        }
    };

    return userAuth ? (
        <div className="add-to-watchlist">
            <button className="watch-later-eye" onClick={addToWachlist}>
                <TbEyePlus />
            </button>
            <button className="watch-later" ref={ref}>
                Watch later
            </button>
        </div>
    ) : null;
};

export default AddToWatchList;
