import React from "react";

const Section17 = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex justify-center">
        <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center">
            <div className="w-full sm:w-1/2">
              <h2 className="text-4xl mb-4">Museum spotlight</h2>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p>The Strong</p>
                <div>
                  <p className="py-4">
                    The Strong is a highly interactive, collections-based museum
                    devoted to the history and exploration of play.
                  </p>
                  <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
                    See the collection
                  </button>
                </div>
              </div>
            </div>

            <div className="w-60 h-60 sm:w-1/2">
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-slate-400 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section17;
