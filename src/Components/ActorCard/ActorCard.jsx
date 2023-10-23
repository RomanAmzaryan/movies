import React from "react";

import "./actorcard.css";

import { useNavigate } from "react-router-dom";
const ActorCard = ({ actor }) => {
    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate(`/person/${id}`);
    };
    return (
        <div className="actor-card">
            <div className="actor-img">
                <img
                    src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                    alt={actor.name}
                />
            </div>
            <div className="actor-info" onClick={() => navigateTo(actor.id)}>
                <h2 className="actor-name">{actor.name}</h2>
                <button className="watch">Watch more</button>
            </div>
        </div>
    );
};

export default ActorCard;
