import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { actionFetchSearchResults } from "../../store/Slices/searchResults/action";
import { selectSearchResults } from "../../store/Slices/searchResults/searchResultsSlice";

import defaultImg from "../../assets/images/default.png";

import { AiOutlineSearch } from "react-icons/ai";

import "./searchinput.css";

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("");
    const searchResults = useSelector(selectSearchResults);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateTo = (category, id) => {
        if (category === "person") {
            navigate(`${category}/${id}`);
        } else {
            navigate(`${category}/watch/${id}`);
        }
        dispatch(actionFetchSearchResults(""));
        setInputValue("");
    };
    return (
        <div>
            <div className="search-input-cont">
                <input
                    type="search"
                    placeholder="Search"
                    value={inputValue}
                    name="query"
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        dispatch(actionFetchSearchResults(e.target.value));
                    }}
                />
                <AiOutlineSearch className="search-icon" />
            </div>
            <div className="search-modal">
                {searchResults.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="search-item-card"
                            onClick={() => navigateTo(item.media_type, item.id)}
                        >
                            {item.media_type === "person" && "tv" ? (
                                item.profile_path ? (
                                    <div className="search-item-img">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                                            alt="movie"
                                        />
                                    </div>
                                ) : (
                                    <div className="search-item-img">
                                        <img src={defaultImg} alt="movie" />
                                    </div>
                                )
                            ) : item.poster_path ? (
                                <div className="search-item-img">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                        alt="movie"
                                    />
                                </div>
                            ) : (
                                <div className="search-item-img">
                                    <img src={defaultImg} alt="movie" />
                                </div>
                            )}
                            <div className="search-item-title">
                                {item.media_type === "person" ? (
                                    <div>
                                        <span className="search-item-title-text">
                                            {item.name}
                                        </span>
                                    </div>
                                ) : item.media_type === "tv" ? (
                                    <div>
                                        <span className="search-item-title-text">
                                            {item.name}
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <span className="search-item-title-text">
                                            {item.title}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchInput;
