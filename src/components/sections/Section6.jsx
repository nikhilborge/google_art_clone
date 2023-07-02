import React from "react";

const Section6 = () => {
  const isMobile = window.innerWidth <= 768; 

  return (
    <section className="overflow-hidden">
      <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48 px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2">
            <p className="text-xs">Today in History</p>
            <h2 className="text-4xl font-base mb-4">
              132 years ago today, koshiro Onchi was born
            </h2>
            <p className="text-sm mb-2">
              Koshiro Onchi, born in Tokyo, was a Japanese print-maker. He was
              the father of the sokasu-hanga movement in twentieth-century
              Japan and a photographer. His work was part of the painting event
              in the art competitions.
            </p>
            <p className="text-[#1A73E8]">Learn More</p>
          </div>
          <div className="w-full sm:w-1/2">
            <div className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-4"} gap-4`}>
              <div className="col-span-2">
                <img
                  className={`${isMobile ? "w-full" : "h-full"} object-cover`}
                  src="https://placehold.co/600x400@3x.png"
                  alt="img"
                />
              </div>
              <div className="col-span-2 mt-4">
                <div className={`grid ${isMobile ? "grid-rows-2" : "grid-cols-2"} gap-2`}>
                  <div className="p-12 bg-slate-400">01</div>
                  <div className="p-12 bg-slate-400">02</div>
                  <div className="p-12 bg-slate-400">03</div>
                  <div className="p-12 bg-slate-400">04</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
