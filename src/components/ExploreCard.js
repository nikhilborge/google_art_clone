import React from "react";

const ExploreCard = ({title, name, sub}) => {
  return (
    <div className=" bg-slate-800 transition-transform duration-300 rounded-lg">
      <div className="group relative w-64 h-96 rounded-lg overflow-hidden hover:bg-slate-500">
        <img
          className="w-full h-full object-cover opacity-50 transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105 group-hover:opacity-20"
          src="https://placehold.co/600x400@3x.png"
          alt="Card"
        />
        <div className="absolute top-0 left-0 right-0 h-full p-4 text-white ">
          <div className="text-center h-full">
            <div class="grid grid-rows-3 items-center h-full  justify-center gap-16">
              <div>
                <p className="text-2xl font-base">{title}</p>
              </div>

              <div>
                <h2 className="text-xl font-base mb-2">{name}</h2>
                <p className="text-sm font-base">
                  {sub}
                </p>
              </div>
              <button className="border border-2 px-4 py-2 w-fit mx-auto">
                <span className="text-base font-medium">Explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
