import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import ActiosPageSideBar from "../../Components/ActorsPageSideBar/ActorsPageSideBar";
import { actionFetchCurrentActor } from "../../store/Slices/currentActor/action";

import "./actormainpage.css";
const ActorMainPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchCurrentActor(id));
    }, [id, dispatch]);

    return (
        <div className="container actor-page">
            <ActiosPageSideBar />
            <Outlet />
        </div>
    );
};

export default ActorMainPage;
