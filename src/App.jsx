import { useState } from "react";
import "./App.css";
import Book from "../public/book.png";
import Arrow from "../public/arrow.png";
import Search from "../public/search.png";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
function App() {
  return (
    <>
      <div className="p-4">
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
        <input type="text" name="fname" />

        <img src={Search}></img>
      </div>
    </>
  );
}

export default App;
