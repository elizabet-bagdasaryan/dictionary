import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Dictionary from "../assets/dictionary.png";

const About = ({ darkMode }) => {
  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <motion.div
        className="flex flex-col items-center justify-center  mt-40 p-6 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl selected-font py-12 bg-white text-gray-700 focus:outline-none cursor-pointer flex">
          About This App
        </h1>
        <p className="text-[#757575] mt-2 text-center max-w-lg">
          This dictionary app helps you find meanings, synonyms, and
          pronunciations of words quickly and easily. It features a sleek dark
          mode, search history, and an interactive user experience.
        </p>
        <motion.div
          className="w-32 h-32 mt-6 bg-purple-600  rounded-full "
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <img src={Dictionary} alt="Dictionary Logo" className="h-40 w-60" />
        </motion.div>
        <Link
          to="/"
          className="mt-16 dark:text-purple-600 font-bold hover:underline"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
