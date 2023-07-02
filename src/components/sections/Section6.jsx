import React from "react";

const Section6 = () => {
  return (
    <section class="overflow-hidden">
      <div className="">
        <div className="py-12 mx-48 px-8">
          <div className="flex items-center w-full justify-center">
            <div className="w-1/2">
              <p className="text-xs">Today in History</p>
              <h2 className="text-4xl font-base mb-4 ">132 years ago today, koshiro Onchi was born</h2>
              <p className="text-sm mb-2">
                Koshiro Onchi, born in Tokyo, was a Japanese print-maker. He was
                the father of the sokasu-hanga movement in twentith century
                Japan, and a a photographer. His work was part of the painting
                event in the art competitions..{" "}
              </p>
              <p className="text-[#1A73E8]">Learn More</p>
            </div>
            <div className="w-1/2">
              <div class="grid grid-rows-2 items-center grid-flow-col gap-4">
                <div class="row-span-2">
                  <img src="https://placehold.co/600x400@3x.png" alt="img" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div class="p-12 bg-slate-400">01</div>
                  <div class="p-12 bg-slate-400">02</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div class="p-12 bg-slate-400">03</div>
                  <div class="p-12 bg-slate-400">04</div>
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
