import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [params] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const searchQuery = params.get("search_results");
  console.log(searchQuery);

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);
  const getSearchResults = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery} &maxResults=20&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const data = await response.json();
      const videoIds = data.items.map((e) => e.id.videoId).join(",");
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const videoData = await videoResponse.json();
      setSearchResults(videoData.items);
    } catch (error) {
      console.log("Error fetching search results", error);
    }
  };
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-10 px-8 mt-24">
      {searchResults.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
