import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
const Head = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 gap-6 shadow-lg">
      <div className="flex w-2/12">
        <FaBars size={30} />
        <span>ExploreSearch</span>
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
      <diV className="flex w-2/12 justify-end">
        <BsThreeDotsVertical size={30} />
        <button> Sign in </button>
      </diV>
    </div>
  );
};

export default Head;
