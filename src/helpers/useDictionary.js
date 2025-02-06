import { useState } from "react";

const useDictionary = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const searchWord = async () => {
    if (word.trim() === "") {
      setIsEmpty(true);
      setIsNotFound(false);
      return;
    }

    setIsEmpty(false);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.ok) {
        const data = await response.json();
        setResults(data[0]);
        setIsNotFound(false);
      } else {
        setResults(null);
        setIsNotFound(true);
      }
    } catch (error) {
      setResults(null);
      setIsNotFound(true);
    }
  };

  return { word, setWord, results, isEmpty, isNotFound, searchWord };
};

export default useDictionary;
