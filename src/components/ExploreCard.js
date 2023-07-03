import React from "react";

const ExploreCard = ({ title, name, sub, img }) => {
  return (
    <div className="bg-slate-800 transition-transform duration-300 rounded-lg">
      <div className="group relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
        <img
          className="w-full h-full opacity-40 group-hover:opacity-25 object-cover object-center transition-transform duration-300 transform-gpu scale-100 group-hover:scale-110"
          src={img}
          alt="Card"
        />
        <div className="absolute top-0 left-0 right-0 h-full p-4 text-white flex flex-col justify-center">
          <div className="text-center flex items-center flex-col justify-around">
            <div className="mb-4">
              <p className="text-2xl font-base">{title}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-base mb-2">{name}</h2>
              <p className="text-sm font-base">{sub}</p>
            </div>
            <button className="border border-2 px-4 py-2 w-fit mx-auto">
              <span className="text-base font-medium">Explore</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
