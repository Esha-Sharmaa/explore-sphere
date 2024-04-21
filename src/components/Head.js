import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import logo from "../images/png/White logo - no background.png"
import { useEffect, useState } from "react";
import { SEARCH_API } from "./utils/constant";
import { cacheResult } from "./utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.search);
  useEffect(() => { 
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      }else getSuggestions()
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);


  const getSuggestions = async () => {
  try {

    const response = await fetch(`${SEARCH_API}${searchQuery}`);
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(
      cacheResult({
        [searchQuery]: data[1],
      })
    );
  } catch (error) {
    console.error("Error getting suggestions:", error.message);
  }
};


  const handleClick = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className="flex justify-between items-center px-8 py-2 gap-6 fixed top-0 z-[1001] w-[100%] bg-white shadow-md">
      <div className="flex w-2/12 items-center">
        <FaBars
          size={25}
          onClick={handleClick}
          className="hover:cursor-pointer"
        />

        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[180px]" />
        </Link>
      </div>
      <div className="flex  w-6/12 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-[90%] py-2 pl-10 pr-4 border border-gray-300 rounded-l-full focus:outline-none h-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 2000)}
        />
        <IoSearchOutline
          size={35}
          className="bg-[#f8f8f8] w-[10%] rounded-r-full px-4 border border-gray-300 h-10 cursor-pointer"
        />
        {showSuggestions && (
          <div className="fixed block top-16 rounded-lg z-10 bg-white  border-2 ">
            {suggestions.map((suggestion, index) => (
              <Link
                key={index}
                to={`/results?search_results=${suggestion}`}
                className="font-robot pl-8 py-2 rounded hover:cursor-pointer hover:bg-slate-200 block"
                onClick={() => {
                  setSearchQuery(suggestion);
                  setShowSuggestions(false);
                }}
              >
                <FaSearch className="inline-block pr-1" />
                {suggestion}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex w-2/12 justify-end">
        <BsThreeDotsVertical size={30} />
        <button> Sign in </button>
      </div>
    </div>
  );
};

export default Head;
