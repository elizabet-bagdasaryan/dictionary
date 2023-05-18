import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Outputs from "./Outputs";
import Book from "../public/book.png";
import Arrow from "../public/arrow.png";
import Search from "../public/search.png";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Fonts from "./Fonts";
function App() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  const searchWord = async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    const data = await response.json();
    setResults(data[0]);
  };
  const header = () => {
    const audio = results?.phonetics.find((phone) => phone.audio !== "").audio;
    return {
      audioUrl: audio,
      word: results?.word,
      phonetic: results?.phonetic,
    };
  };
  console.log(results);
  return (
    <>
      <div className="my-2 h-14 flex flex-row items-center space justify-between">
        <img src={Book}></img>
        <div className="my-2 h-14 flex flex-row items-center ">
          {/* <div className="my-2 h-14 flex flex-row items-center">
            <p>Sans Serif</p>
            <img src={Arrow}></img>
          </div> */}
          <Fonts />
          <div className="h-6 border border-gray-300"></div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-400 rounded-full peer-focus:outline-none dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          </label>
          <DarkModeOutlinedIcon />
        </div>
      </div>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="w-full bg-gray-100 border-none ouline-none rounded-lg px-3 py-4 shadow-sm"
      />
      <button className="-mx-14 px-3 py-4 rounded-lg" onClick={searchWord}>
        <img src={Search} width={18}></img>
      </button>
      {results?.meanings?.length > 0 && (
        <>
          <Header {...header()} />

          {results.meanings.map((outputs, index) => {
            return <Outputs {...outputs} key={index} />;
          })}
        </>
      )}
    </>
  );
}

export default App;
