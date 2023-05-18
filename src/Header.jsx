import React from "react";
import Triangle from "../public/triangle.png";
import { useRef } from "react";
function Header({ audioUrl, word, phonetic }) {
  const ref = useRef();

  const displayAudio = () => {
    ref.current.play();
  };
  return (
    <>
      <div className="flex flex-row justify-between my-5">
        <h3 className="font-bold text-3xl font-serif capitalize">
          {word}
          <span className="block font-normal text-sm text-purple-600">
            {phonetic}
          </span>
        </h3>
        <div
          onClick={displayAudio}
          className="bg-purple-300 h-12 w-12 rounded-full flex items-center justify-center"
        >
          <img src={Triangle} className="w- h-4" />
        </div>
      </div>

      <audio className="hidden" ref={ref} src={audioUrl}></audio>
    </>
  );
}

export default Header;
