import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { selectGenres } from "../../store/Slices/genres/genresSlice";
import { actionFetchGenres } from "../../store/Slices/genres/action";

import "./sidebarmenu.css";
const SideBar = () => {
    const genres = useSelector(selectGenres);
    const dispatch = useDispatch();

    const category = new URL(window.location.href).pathname.split("/")[1];

    useEffect(() => {
        dispatch(actionFetchGenres(category));
    }, [category, dispatch]);

    return (
        <div className="sidebar-cont ">
            <div className="sidebar">
                <div className="sidebar-categories-title">
                    <span className="sidebar-title">
                        Categories |
                        <Link className="back-to" to={`/${category}`}>
                            {category}
                        </Link>
                    </span>
                </div>
                <ul className="sidebar-categories">
                    {genres.map((genre) => {
                        return (
                            <li key={genre.id}>
                                <NavLink
                                    to={`/${category}/${genre.id} + ${genre.name}`}
                                >
                                    {genre.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
