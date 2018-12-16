import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos }) => {
    return (
        <div className="video-list ui relaxed divided list">
            {videos.map((video) => 
                <VideoItem
                    key={video.id.videoId || video.id.playlistId || video.id.channelId}
                    onVideoSelect={onVideoSelect}
                    video={video}
                />
            )}
        </div>
    )
}

export default VideoList;

