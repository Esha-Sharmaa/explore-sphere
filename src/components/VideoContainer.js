import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "./utils/constant";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    try {
        const response = await fetch(YOUTUBE_API_URL);
      const json = await response.json();
      setVideos(json.items)
    } catch (error) {
      console.log("Error Fetching", error);
    }
    };
    useEffect(() => {
        fetchVideos();
    }, []);
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 p-8 ">
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
