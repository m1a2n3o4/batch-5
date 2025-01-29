import React, { use } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/tmbdapi";
import { addNowPlayingMovies,  addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import MainContainer from "./MainContainer";
const Allmovies = () => {
    const dispatch = useDispatch();

    // now Playing
    const getNowPlayingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_OPTIONS );
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
        // We nedd to store the data into ReduxStore - moviesSslice
    }

    // Pouplar Movies
    const getPopularMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', TMDB_API_OPTIONS );
        const jsonData = await data.json();
        dispatch( addPopularMovies(jsonData.results));
        console.log('popur', jsonData);
        // We nedd to store the data into ReduxStore - moviesSslice
    }
    useEffect( () => {
       // APi Call
       getNowPlayingMovies();
       getPopularMovies();
    },[]);

    // Popular Movie

    return (
        <div className="all-movies">
            <Header/>
            <MainContainer/>
            

        </div>
    );
};

export  default Allmovies;