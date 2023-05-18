// import React, { useState } from "react";
// import Arrow from "../public/arrow.png";
// const FontDropdown = () => {
//   const [selectedFont, setSelectedFont] = useState("");

//   const handleFontChange = (e) => {
//     const font = e.target.value;
//     setSelectedFont(font);
//     document.body.style.fontFamily = font;
//   };

//   return (
//     <div className="relative w-40">
//       <select
//         className="w-full px-4 py-2 border border-gray-300 rounded appearance-none bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         value={selectedFont}
//         onChange={handleFontChange}
//       >
//         <option value="">Select Font</option>
//         <option value="sans-serif">Sans-serif</option>
//         <option value="serif">Serif</option>
//         <option value="monospace">Monospace</option>
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//         <img src={Arrow} alt="Dropdown Arrow" className="h-2 w-3" />
//       </div>
//     </div>
//   );
// };

// export default FontDropdown;
import React, { useState, useEffect } from "react";
import Arrow from "../public/arrow.png";

const FontDropdown = () => {
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [appliedFont, setAppliedFont] = useState("sans-serif");

  useEffect(() => {
    setAppliedFont(getAppliedFont());
  }, []);

  const getAppliedFont = () => {
    const bodyStyle = document.defaultView.getComputedStyle(document.body);
    return bodyStyle.fontFamily;
  };

  const handleFontChange = (e) => {
    const font = e.target.value;
    setSelectedFont(font);
    document.body.style.fontFamily = font;
    setAppliedFont(getAppliedFont());
  };

  return (
    <div className="relative w-40">
      <select
        className="w-full px-4 py-2  rounded appearance-none bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={selectedFont}
        onChange={handleFontChange}
      >
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <img src={Arrow} alt="Dropdown Arrow" className="h-2 w-3" />
      </div>
    </div>
  );
};

export default FontDropdown;
