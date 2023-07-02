import React from "react";

const ColorBox = ({ name, code }) => {
  return (
    <div
      class={`box group p-4 w-32 h-96 rounded-lg ${code} hover:w-96 transition-all duration-300`}
    >
      <div className="absolute bottom-0 p-4">
        <p className="hidden group-hover:block transition-all duration-300  text-white">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ColorBox;
