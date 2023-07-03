import React from "react";

const ColorBox = ({ name, color, img  }) => {
  return (
    <div
className={`box group w-36 sm:w-44 h-96 rounded-lg ${color} hover:w-52 sm:hover:w-72 transition-all duration-300 `}
  >
    <div className="w-full h-full overflow-hidden rounded-lg group-hover:opacity-50 ">
    {img ? ( 
      <img
        className="w-full h-full object-cover"
        src={img}
        alt="img"
      />
    ) : null}
      
    </div>
    <div className="absolute bottom-0 p-4">
      <p className="hidden group-hover:block transition-all duration-300 text-white">
        {name}
      </p>
    </div>
  </div>
  );
};

export default ColorBox;
