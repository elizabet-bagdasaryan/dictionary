import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Outputs from "./components/Outputs";
import About from "./components/About";
import Book from "./assets/book.png";
import Search from "./assets/search.png";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Fonts from "./components/Fonts";
import SadEmoji from "./assets/sad.png";
import LinkIcon from "./assets/export.png";
import useDarkMode from "./helpers/useDarkMode";
import useDictionary from "./helpers/useDictionary";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { word, setWord, results, isEmpty, isNotFound, searchWord } =
    useDictionary();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <nav className="flex justify-between p-4">
                  <img src={Book} alt="Book Logo" className="h-8" />
                  <div className="flex items-center space-x-4">
                    <Fonts darkMode={darkMode} />
                    <div className="h-6 border border-gray-300"></div>
                    <label className="relative inline-flex items-center cursor-pointer switch">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onChange={toggleDarkMode}
                      />
                      <div className="w-14 h-8 bg-gray-400 rounded-full relative py-1 px-1">
                        <div
                          className={`absolute h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out transform ${
                            darkMode ? "translate-x-full" : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                    <DarkModeOutlinedIcon className="moon color-gray" />
                    <a
                      href="/about"
                      className="selected-font dark:text-purple-600 hover:underline font-bold"
                    >
                      About
                    </a>
                  </div>
                </nav>

                <div>
                  <input
                    type="text"
                    value={word}
                    placeholder="Search for any word..."
                    onChange={(e) => setWord(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && searchWord()}
                    className={`font-bold w-full bg-gray-100 border ${
                      isEmpty ? "border-red-500" : "border-none"
                    } outline-none rounded-lg px-3 py-4 shadow-sm`}
                  />
                  <button
                    className="-mx-14 px-3 py-4 rounded-lg"
                    onClick={searchWord}
                  >
                    <img src={Search} width={16} />
                  </button>
                  {isEmpty && (
                    <h5 className="text-[#FF5252] mt-2">
                      Whoops, can't be empty...
                    </h5>
                  )}
                  {isNotFound && (
                    <div className="flex flex-col items-center justify-center mt-28">
                      <img src={SadEmoji} alt="Sad Emoji" />
                      <h2 className="font-bold mt-4 mb-4">
                        No Definitions Found
                      </h2>
                      <p className="text-[#757575] text-center">
                        Sorry, we couldn't find the word. Try again later or
                        check the web.
                      </p>
                    </div>
                  )}
                  {results?.meanings?.length > 0 && (
                    <>
                      <Header
                        word={results.word}
                        phonetic={results.phonetic}
                        audioUrl={results.phonetics?.[0]?.audio}
                      />
                      {results.meanings.map((meaning, index) => (
                        <Outputs
                          key={index}
                          partOfSpeech={meaning.partOfSpeech}
                          definitions={meaning.definitions}
                          synonyms={meaning.synonyms}
                        />
                      ))}
                      <hr className="mt-6 mb-4" />
                      <div className="flex items-center">
                        <p className="text-[#757575] mr-4">Source</p>
                        <a
                          href={`https://en.wiktionary.org/wiki/${word}`}
                          className="flex text-[#2D2D2D] underline"
                        >
                          {`https://en.wiktionary.org/wiki/${word}`}{" "}
                          <img src={LinkIcon} className="w-3 h-3 ml-2 mt-1.5" />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
