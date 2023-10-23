import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActorCard from "../../Components/ActorCard/ActorCard";
import { selectActors } from "../../store/Slices/actors/actorsSlice";
import { actionFetchActors } from "../../store/Slices/actors/action";

import "./actorspage.css";
const ActorsPage = () => {
    const actors = useSelector(selectActors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actionFetchActors());
    }, [dispatch]);
    return (
        <div className="container actors-list">
            {actors.map((actor) => {
                return (
                    <div key={actor.id} className="actors">
                        <ActorCard actor={actor} />
                    </div>
                );
            })}
        </div>
    );
};

export default ActorsPage;
