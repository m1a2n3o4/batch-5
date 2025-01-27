import React from "react";
import  VideoTitle  from "./VideoTitle";
import  MovieListing  from "./MovieListing";

const MoviesContainer = () =>{
    return (
        <div className="movies-container">
            <VideoTitle/>
            <MovieListing/>
        </div>
    )
};

export default MoviesContainer;