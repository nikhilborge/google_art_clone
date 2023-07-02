import React from "react";

const Section5 = () => {
  const isMobile = window.innerWidth <= 768; 

  return (
    <section>
      <div className="overflow-hidden bg-[url('https://www.pngplay.com/wp-content/uploads/13/Aesthetic-White-Transparent-Background.png')]">
        <div className="pt-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48 px-4 sm:px-8">
          <div className="">
            <div className="text-5xl font-bold text-center py-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Games
              </span>
            </div>

            <div className="flex flex-wrap justify-center pb-12 px-4">
              <div
                className={`bg-white ${
                  isMobile ? "mb-4" : "mb-20"
                } hover:scale-[110%] transition-transform duration-300 cursor-pointer relative h-44 w-44 shadow rounded-full flex items-center justify-center overflow-hidden`}
              >
                <div className="rounded-full w-36 h-36 overflow-hidden group relative bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://placehold.co/600x400@3x.png"
                    alt="circle"
                  />
                </div>
              </div>

              <div
                className={`bg-white ${
                  isMobile ? "mt-4" : "mt-20"
                } hover:scale-[110%] transition-transform duration-300 cursor-pointer relative h-44 w-44 shadow rounded-full flex items-center justify-center overflow-hidden`}
              >
                <div className="rounded-full w-36 h-36 overflow-hidden group relative bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://placehold.co/600x400@3x.png"
                    alt="circle"
                  />
                </div>
              </div>

              <div
                className={`bg-white ${
                  isMobile ? "mb-4" : "mb-20"
                } hover:scale-[110%] transition-transform duration-300 cursor-pointer relative h-44 w-44 shadow rounded-full flex items-center justify-center overflow-hidden`}
              >
                <div className="rounded-full w-36 h-36 overflow-hidden group relative bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://placehold.co/600x400@3x.png"
                    alt="circle"
                  />
                </div>
              </div>

              <div
                className={`bg-white ${
                  isMobile ? "mt-4" : "mt-20"
                } hover:scale-[110%] transition-transform duration-300 cursor-pointer relative h-44 w-44 shadow rounded-full flex items-center justify-center overflow-hidden`}
              >
                <div className="rounded-full w-36 h-36 overflow-hidden group relative bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://placehold.co/600x400@3x.png"
                    alt="circle"
                  />
                </div>
              </div>

              <div
                className={`bg-white ${
                  isMobile ? "mb-4" : "mb-20"
                } hover:scale-[110%] transition-transform duration-300 cursor-pointer relative h-44 w-44 shadow rounded-full flex items-center justify-center overflow-hidden`}
              >
                <div className="rounded-full w-36 h-36 overflow-hidden group relative bg-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://placehold.co/600x400@3x.png"
                    alt="circle"
                  />
                </div>
              </div>

              {/* Add more circles here */}

            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white text-base font-medium my-12">
        <button className="bg-[#D85245] px-4 py-2 rounded-lg">
          More games
        </button>
      </div>
    </section>
  );
};

export default Section5;
