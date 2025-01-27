import React, { use } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/tmbdapi";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import  MoviesContainer from "./MoviesContainer";
const Allmovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS );
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
        // We nedd to store the data into ReduxStore - moviesSslice
    }
    useEffect( () => {
       // APi Call
       getNowPlayingMovies();
    },[]);

    return (
        <div className="all-movies">
            <Header/>
            <MoviesContainer/>
        </div>
    );
};

export  default Allmovies;