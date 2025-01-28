import React from "react";

const VideoTitle = ({title, description}) => {
    
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="play-button">
                <button className="btn btn-warning">Paly</button> &
                <button className="btn btn-warning">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;