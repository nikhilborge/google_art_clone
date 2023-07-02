import React from "react";

const Section2 = () => {
  return (
    <section class="overflow-hidden">
      <div className="pt-12 px-8">
        <div className="mx-48 ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-base">Play with words</h2>
          </div>

          <div>
            <div className="group relative w-full h-96  bg-slate-800">
              <img
                className="w-full h-full object-cover opacity-50 "
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 left-0 right-0 h-full p-4 text-white ">
                <div className="text-center h-full flex items-center justify-center">
                  <div class="">
                    <div>
                      <h2 className="text-4xl font-medium mb-2 my-12">
                        Haiku Imagined
                      </h2>
                      <p className="text-sm font-base my-8">
                        Take a pause: experience traditional and modern haiku
                        lovingly illustrated and animated with AI generated
                        music, fonts, and video.
                      </p>
                    </div>
                    <button className="rounded-full bg-[#1A73E8] px-4 py-2  mt-4 mx-auto">
                      <span className="text-base font-normal flex">
                        <span className="mr-2">$</span>
                        Play Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                        <div className="border border-2 border-slate-400 rounded-full px-4 py-2 text-sm font-normal">
                            XYZ Toy
                        </div>
                        <div className="border border-2 border-slate-400 rounded-full px-4 py-2 text-sm font-normal">
                            Old One Out
                        </div>
                        <div className="border border-2 border-slate-400 rounded-full px-4 py-2 text-sm font-normal">
                            Un-Dough!
                        </div>
                        <div className="border border-2 border-slate-400 rounded-full px-4 py-2 text-sm font-normal">
                            More culture games
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
