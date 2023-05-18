import React from "react";
import Triangle from "../public/triangle.png";

function Header() {
  return (
    <>
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
