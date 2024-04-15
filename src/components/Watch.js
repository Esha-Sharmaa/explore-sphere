import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from 'react-router-dom';
const Watch = () => {
    const [params] = useSearchParams();
    const videoId = params.get("v");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
      <div>
        <iframe
          width="800"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}?si=w2_W8gINgtlZegPZ`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default Watch;