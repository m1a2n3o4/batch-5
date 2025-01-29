import React from "react";
import { TMDB_API_OPTIONS } from "../utils/tmbdapi";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const VideoBackground = ({videoid}) => {
    const trailerVideo = useSelector( (store) => store?.movies?.trailerVideo);
    const dispatch = useDispatch();


    const getMovieVideo = async() =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" + videoid +"/videos?language=en-US", TMDB_API_OPTIONS );
        const jsonData = await data.json();
       // console.log(jsonData);
        const filterData = jsonData.results.filter( (video) => video.type == 'Trailer');
       // console.log(filterData);
        const trailer = filterData.length ? filterData[0] : jsonData.results[0];
      // let trailer = '';
    //    if(filterData) {
    //     trailer = filterData[0]
    //    } else {
    //     trailer = jsonData.results[0];
    //    }
        dispatch(addTrailerVideo(trailer));
        // We nedd to store the data into ReduxStore - moviesSslice
    }
    useEffect( () => {
       // APi Call
       getMovieVideo();
    },[]);

    return(
        <div>
            <p>{videoid}</p>
            <iframe
              src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
              title="YouTube video player" frameborder="0" ></iframe>
             </div>
    );
};

export default VideoBackground;