import React from "react";
import MovieListing from "./MovieListing";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

    const movies = useSelector( (store) => store.movies);
    console.log(movies)
    return(
        <div className="bg-black">
           <MovieListing title= "Now Playing" movies= {movies.nowPlayongMovies} />
           <MovieListing title= "Popular Movies" movies= {movies.popularMovies} />
        </div>
        
    );
};

export default SecondaryContainer;