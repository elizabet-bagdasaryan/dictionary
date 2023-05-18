import React from "react";

function Outputs({ partOfSpeech, definitions, synonyms }) {
  return (
    <>
      <div className="p-4">
        <div className="my-3">
          <div className="flex flex-row items-center text-lg font-bold font-serif">
            <p>{partOfSpeech}</p>
            <hr className="w-full ml-20"></hr>
          </div>
          <p className="text-gray-800 mt-3 font-semibold">Meaning</p>
          <ul className="list-disc px-10 text-gray-800 text-sm space-y-2">
            {definitions.map((i, index) => (
              <li key={index}>{i.definition}</li>
            ))}{" "}
          </ul>
          {synonyms.length > 0 && (
            <p className="text-gray-800 text-sm">
              Synonyms{" "}
              {synonyms.map((synonym, index) => (
                <span key={index} className="text-purple-600 mx-1">
                  {synonym}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Outputs;
