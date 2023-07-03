import React from "react";
import HeadTitle from "../ui/HeadTitle";

const Section10 = () => {
  return (
    <section className="overflow-hidden">
      <div className="">
        <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
        <HeadTitle title="Accessories from the ages" subTitle="Discover jewelry from around the world"/>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="transition-transform duration-300 rounded-lg w-full">
              <div className="group relative rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                  src="https://placehold.co/600x400@3x.png"
                  alt="Card"
                />
                <div className="absolute transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                  <span className="bg-[#1A73E8] text-xs px-2 py-1 rounded text-white">
                    Play
                  </span>
                  <h2 className="text-base font-medium">
                    Balenciaga x Bullfighters
                  </h2>
                  <p className="text-xs">Cristóbal Balenciaga</p>
                </div>
              </div>
            </div>

            <div className="transition-transform duration-300 rounded-lg w-full">
              <div className="group relative rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                  src="https://placehold.co/600x400@3x.png"
                  alt="Card"
                />
                <div className="absolute transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                  <span className="bg-[#1A73E8] text-xs px-2 py-1 rounded text-white">
                    Color Explorer
                  </span>
                  <h2 className="text-base font-medium">
                    Balenciaga x Bullfighters
                  </h2>
                  <p className="text-xs">Cristóbal Balenciaga</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12">
            <div className="drop-shadow border border-[#ffff] rounded-lg w-full">
              <div className="flex flex-col sm:flex-row">
                <div className="p-4 sm:w-2/4">
                  <div className="text-center flex flex-col items-center justify-around w-full h-full">
                    <p className="text-sm mb-12"></p>
                    <div>
                      <h2 className="text-xl font-base mb-4">
                        The Camino de Santiago
                      </h2>
                      <p className="text-sm">
                        The legendary origin of the Way of Saint James
                      </p>
                    </div>
                    <div className="mx-auto"></div>
                    <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
                      Read
                    </button>
                  </div>
                </div>
                <div className="sm:w-2/4 object-cover">
                  <div className="relative w-full h-full">
                    <img
                      className="w-full h-full object-cover opacity-50"
                      src="https://placehold.co/600x400@3x.png"
                      alt="Card"
                    />
                    <div className="absolute top-0 right-0">
                      <p>Share icon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
