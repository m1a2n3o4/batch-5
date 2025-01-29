import React from "react";
import MovieCard from "./MovieCard";

const MovieListing = ({title, movies}) => {

    console.log("listong com", movies);
    return(
        <div>
            <h3 className="mb-1">{title}</h3>
            <div className="movie-slider">
            {
                movies?.map( movie => 
                    <MovieCard movie_name = {movie.original_title} posterurl = {movie.poster_path}/>
                )
            };
            </div>
             
        </div>
    );
};

export default MovieListing;