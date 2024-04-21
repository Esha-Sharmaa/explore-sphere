import React from 'react';
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
const SideBar = () => {
  const showSlideBar = useSelector((store) => store.app.isMenuOpen);
  return (
    showSlideBar && (
      <div className="sticky bg-white col-span-1  px-6 box-sizing transition-all duration-500  self-start  top-0 pt-24">
        <div className="flex gap-5  font-roboto hover:bg-slate-100 hover:cursor-pointer rounded-lg mb-2 p-2">
          <FaHome size={25} />
          <span> Home</span>
        </div>
        <div className="flex gap-5  font-roboto hover:bg-slate-100 hover:cursor-pointer rounded-lg mb-2 p-2">
          <SiYoutubeshorts className="inline-block" size={25} />
          <span> Shorts</span>
        </div>
        <div className="flex gap-5 font-roboto hover:bg-slate-100 hover:cursor-pointer rounded-lg mb-2 p-2">
          <MdOutlineSubscriptions className="inline-block" size={25} />
          <span> Subscriptions </span>
        </div>
      </div>
    )
  );
}

export default SideBar;
