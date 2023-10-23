import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../../Pages/Layout/Layout";
import HomePage from "../../Pages/HomePage/HomePage";
import MoviesPage from "../../Pages/MoviesPage/MoviesPage";
import MoviesMain from "../MoviesMain/MoviesMain";
import TvShowsMain from "../../Pages/TvShowsMain/TvShowsMain";
import MoviesMainPage from "../../Pages/MoviesMainPage/MoviesMainPage";
import MoviePreview from "../MoviePreview/MoviePreview";
import MoviePreviewCont from "../../Pages/MoviePreviewCont/MoviePreviewCont";
import ActorsPage from "../../Pages/ActorsPage/ActorsPage";
import WatchActorInfo from "../WatchActorInfo/WatchActorInfo";
import ActorMainPage from "../../Pages/ActorMainPage/ActorMainPage";
import RandomMovie from "../RandomMovie/RandomMovie";
import SignInPage from "../../Pages/SignInPage/SignInPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path="movie" element={<MoviesPage />}>
                    <Route index element={<MoviesMainPage />} />
                    <Route path=":genre" element={<MoviesMain />} />
                </Route>

                <Route path="tv" element={<TvShowsMain />}>
                    <Route index element={<MoviesMainPage />} />
                    <Route path=":genre" element={<MoviesMain />} />
                </Route>

                <Route path="tv/watch/:id" element={<MoviePreviewCont />}>
                    <Route index element={<MoviePreview />} />
                </Route>

                <Route path="movie/watch/:id" element={<MoviePreviewCont />}>
                    <Route index element={<MoviePreview />} />
                </Route>

                <Route path="actors" element={<ActorsPage />} />

                <Route path="person/:id" element={<ActorMainPage />}>
                    <Route index element={<WatchActorInfo />} />
                </Route>

                <Route path="random movie" element={<RandomMovie />}>
                    <Route index element={<MoviePreview />} />
                </Route>
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;
