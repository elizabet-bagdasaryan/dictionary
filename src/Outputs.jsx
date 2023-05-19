import React from "react";

function Outputs({ partOfSpeech, definitions, synonyms }) {
  return (
    <>
      <div className="p-4">
        <div className="my-3">
          <div className="flex flex-row items-center text-lg font-bold font-serif">
            <h4 className="italic mb-4">{partOfSpeech}</h4>
            <hr className="w-full ml-20"></hr>
          </div>
          <p className="text-[#757575] mt-3 font-semibold mb-4">Meaning</p>
          <ul className="list-disc px-10 text-gray-800 text-sm space-y-2">
            {definitions.map((i, index) => (
              <li key={index}>{i.definition}</li>
            ))}
          </ul>
          {synonyms.length > 0 && (
            <p className="text-[#757575] text-sm mt-6">
              Synonyms{" "}
              {synonyms.map((synonym, index) => (
                <span key={index} className="text-[#A445ED] mx-1 font-bold ">
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
