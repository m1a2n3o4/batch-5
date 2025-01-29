import React from "react";
import { IMG_URL } from "../utils/tmbdapi"

const MovieCard = ({movie_name, posterurl}) => {
    return(
        <div className="movie">
            <img src={IMG_URL + posterurl} />
             <div className="movie-title">
             {movie_name}
             </div>
        </div>
    );
};

export default MovieCard;