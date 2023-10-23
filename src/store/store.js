import { applyMiddleware, combineReducers, createStore } from "redux";
import { genresReducer, initalGenres } from "./Slices/genres/genresSlice";
import { initalMovies, moviesReducer } from "./Slices/movies/moviesSlice";
import {
    currentMovieReducer,
    initialCurrentMovie,
} from "./Slices/currentMovie/currentMovieSlice";
import {
    initalMovieTrailer,
    movieTrailerReducer,
} from "./Slices/movieTrailer/movieTrailerSlice";
import { initalReviews, reviewsReducer } from "./Slices/reviews/reviewsSlice";
import { actorsReducer, initalActors } from "./Slices/actors/actorsSlice";
import {
    currentActorReducer,
    initalCurrentActor,
} from "./Slices/currentActor/currentActorSlice";
import thunk from "redux-thunk";
import {
    initalSimilarMovies,
    similarMoviesReducer,
} from "./Slices/similarMovies/similarMoviesSlice";
import {
    initalNowPlayingMovies,
    nowPlayingMoviesReducer,
} from "./Slices/nowPlayingMovies/nowPlayingMoviesSlice";
import {
    initalTopRatedMovies,
    topRatedMoviesReducer,
} from "./Slices/topRatedMovies/topRatedMoviesSlice";

import { trailerMiddleware } from "./middleware/trailerMovieMiddleware";
import {
    initalSearchResults,
    searchResultsReducer,
} from "./Slices/searchResults/searchResultsSlice";
import {
    initalRandomMovie,
    randomMovieReducer,
} from "./Slices/randomMovie/randomMovieSlice";
import { initalUserAuth, userAuthReducer } from "./Slices/userAuth/userAuth";
import {
    currentUserReducer,
    initalCurrentUser,
} from "./Slices/currentUser/currentUser";
import { userAuthMiddleware } from "./middleware/userAuthMiddleware";
import {
    initalNewReviews,
    newReviewsReducer,
} from "./Slices/newReviews/newReviews";
import {
    initalWatchlist,
    watchlistReducer,
} from "./Slices/watchlist/watchlistSlice";
import { watchlistMiddleware } from "./middleware/watchlistMiddleware";
import { similarMoviesMiddleware } from "./middleware/similarMoviesMiddleware";

export const store = createStore(
    combineReducers({
        genres: genresReducer,
        movies: moviesReducer,
        randomMovie: randomMovieReducer,
        similarMovies: similarMoviesReducer,
        topRatedMovies: topRatedMoviesReducer,
        nowPlayingMovies: nowPlayingMoviesReducer,
        currentMovie: currentMovieReducer,
        movieTrailer: movieTrailerReducer,
        reviews: reviewsReducer,
        newReviews: newReviewsReducer,
        actors: actorsReducer,
        currentActor: currentActorReducer,
        searchResults: searchResultsReducer,
        userAuth: userAuthReducer,
        currentUser: currentUserReducer,
        watchlist: watchlistReducer,
    }),
    {
        genres: initalGenres,
        movies: initalMovies,
        randomMovie: initalRandomMovie,
        similarMovies: initalSimilarMovies,
        topRatedMovies: initalTopRatedMovies,
        nowPlayingMovies: initalNowPlayingMovies,
        currentMovie: initialCurrentMovie,
        movieTrailer: initalMovieTrailer,
        reviews: initalReviews,
        newReviews: initalNewReviews,
        actors: initalActors,
        currentActor: initalCurrentActor,
        searchResults: initalSearchResults,
        userAuth: initalUserAuth,
        currentUser: initalCurrentUser,
        watchlist: initalWatchlist,
    },
    applyMiddleware(
        thunk,
        userAuthMiddleware,
        watchlistMiddleware,
        similarMoviesMiddleware,
        trailerMiddleware
    )
);
