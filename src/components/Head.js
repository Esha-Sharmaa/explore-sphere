import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import logo from "../images/png/White logo - no background.png"
const Head = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="flex justify-between items-center px-8 py-4 gap-6">
      <div className="flex w-2/12 items-center">
        <FaBars size={25} onClick={handleClick} className="hover:cursor-pointer"/>
        <img src={logo}  alt="logo" className="w-[180px]"/>
      </div>
      <div className="flex  w-6/12">
        <input
          type="text"
          placeholder="Search..."
          className="w-[90%] py-2 pl-10 pr-4 border border-gray-300 rounded-l-full focus:outline-none h-10"
        />
        <IoSearchOutline
          size={35}
          className="bg-[#f8f8f8] w-[10%] rounded-r-full px-4 border border-gray-300 h-10 cursor-pointer"
        />
      </div>
      <div className="flex w-2/12 justify-end">
        <BsThreeDotsVertical size={30} />
        <button> Sign in </button>
      </div>
    </div>
  );
};

export default Head;
