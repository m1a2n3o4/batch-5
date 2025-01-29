import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {

    const movies = useSelector( (store) => store?.movies?.nowPlayongMovies);
    if(!movies) return;
    const mainMovie = movies[5];

    // Destructring the Objecting.
    const { original_title, overview, id  } = mainMovie;


    return(
        <div>
            <section className="hero d-flex">
            <VideoBackground videoid={id} />
            <div className="hero-overlay"></div>
            <VideoTitle title={original_title} description = {overview}/>
            </section>
            <SecondaryContainer/>
            
        </div>
    );
};

export default MainContainer;