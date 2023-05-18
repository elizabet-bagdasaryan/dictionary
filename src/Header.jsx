import React from "react";
import Book from "../public/book.png";
import Arrow from "../public/arrow.png";
import Search from "../public/search.png";
import Triangle from "../public/triangle.png";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
function Header() {
  return (
    <>
      <div className="my-2 h-14 flex flex-row items-center space justify-between">
        <img src={Book}></img>
        <div className="my-2 h-14 flex flex-row items-center">
          <p>Sans Serif</p>
          <img src={Arrow}></img>
        </div>

        <div className="h-6 border border-gray-300"></div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-400 rounded-full peer-focus:outline-none dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
        </label>
        <DarkModeOutlinedIcon />
      </div>
      <input
        type="text"
        name="fname"
        className="w-full bg-gray-100 border-none ouline-none rounded-lg px-3 py-4 shadow-sm"
      />
      <button className="-mx-14 px-3 py-4 rounded-lg">
        <img src={Search} width={18}></img>
      </button>
      <div className="flex flex-row justify-between my-5">
        <h3 className="font-bold text-3x1 font-serif">
          Human
          <span className="block font-normal text-sm text-purple-600">
            /dfdf
          </span>
        </h3>
        <div className="bg-purple-300 h-12 w-12 rounded-full flex items-center justify-center">
          <img src={Triangle} className="w- h-4" />
        </div>
      </div>
    </>
  );
}

export default Header;
