import React from "react";
import VideoItem from "./VideoItem";

//JS swag destructuring the object as we are passing it
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
