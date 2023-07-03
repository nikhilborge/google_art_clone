import React from "react";

const ColorBox = ({ name, color, img,sub  }) => {
  return (
    <div
className={`box cursor-pointer group w-36 sm:w-44 h-96 rounded-lg ${color} hover:w-52 sm:hover:w-72 transition-all duration-300 `}
  >
    <div className="w-full h-full overflow-hidden rounded-lg group-hover:opacity-30 opacity-50 ">
    {img ? ( 
      <img
        className="w-full h-full object-cover"
        src={img}
        alt="img"
      />
    ) : null}
      
    </div>
    <div className="absolute bottom-0 p-4">
      <p className="hidden text-base group-hover:block transition-all duration-300 text-white">
        {name}
      </p>
      {sub ? (
        <span className="text-sm hidden group-hover:block transition-all duration-300 text-white ">{sub}</span>
      ): null}
    </div>
  </div>
  );
};

export default ColorBox;
