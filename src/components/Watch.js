import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
const Watch = () => {
    const [params] = useSearchParams();
    const videoId = params.get("v");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    return (
      <div className="flex mt-14 p-8">
        <div className='w-8/12'>
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}?si=w2_W8gINgtlZegPZ`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <CommentsContainer />
        </div>
        <LiveChat/>
      </div>
    );
}

export default Watch;
