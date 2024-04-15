import React from 'react';
import { formatDate, formatViewCount } from './utils/youtubeUtils';
import { FaCircle } from "react-icons/fa";
const VideoCard = ({ info }) => {
    const { thumbnails, title, publishedAt, channelTitle } = info?.snippet;
    const { viewCount } = info?.statistics;

    return (
      <div className="p-2 rounded transition duration-300 ease-in-out transform hover:shadow-xl hover:cursor-pointer hover:shadow-stone-500">
        <div>
          <img
            src={thumbnails?.medium?.url}
            alt="thumbnail"
            className="w-[100%] rounded"
          />
        </div>
        <div>
          <h1 className="font-roboto font-semibold text-wrap">{title} </h1>
          <p className="text-sm text-gray-600 py-1"> {channelTitle}</p>
          <span className="text-sm text-gray-600">
            {formatViewCount(viewCount)} views
          </span>
          <FaCircle className="inline-block p-1 text-sm text-gray-600" />
          <span className="text-sm text-gray-600">
            {formatDate(publishedAt)}
          </span>
        </div>
      </div>
    );
}

export default VideoCard;
