import React, { useState } from "react";

const Section14 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  const isCardActive = (index) => {
    return index === activeCard;
  };

  return (
    <div
      className="bg-[#FEF6E0]"
      style={{
        backgroundImage: "url('https://placehold.co/600x400@3x.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="overflow-hidden">
        <div className="">
          <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-base">Six unique ecosystems</h2>
              <p>How the same planet can feel like completely different worlds</p>
            </div>

            <div className="flex justify-center items-center mb-12">
              <div className="flex relative w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 space-x-4">
                <div
                  className={`box group w-36 sm:w-44 h-96 rounded-lg bg-red-500 hover:w-52 sm:hover:w-72 transition-all duration-300 ${
                    isCardActive(0) ? "w-52 sm:w-72" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(0)}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"
                      alt="img"
                    />
                  </div>
                  <div className="absolute bottom-0 p-4">
                    <p className="hidden group-hover:block transition-all duration-300 text-white">
                      Teal
                    </p>
                  </div>
                </div>
                <div
                  className={`box p-4 w-12 sm:w-44 h-96 rounded-lg bg-green-500 hover:w-96 sm:hover:w-96 transition-all duration-300 ${
                    isCardActive(1) ? "w-52 sm:w-72" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(1)}
                  onMouseLeave={handleCardLeave}
                ></div>
                <div
                  className={`box p-4 w-12 sm:w-44 h-96 rounded-lg bg-blue-500 hover:w-96 sm:hover:w-96 transition-all duration-300 ${
                    isCardActive(2) ? "w-52 sm:w-72" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(2)}
                  onMouseLeave={handleCardLeave}
                ></div>
                <div
                  className={`box p-4 w-12 sm:w-44 h-96 rounded-lg bg-yellow-500 hover:w-96 sm:hover:w-96 transition-all duration-300 ${
                    isCardActive(3) ? "w-52 sm:w-72" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(3)}
                  onMouseLeave={handleCardLeave}
                ></div>
                <div
                  className={`box p-4 w-12 sm:w-44 h-96 rounded-lg bg-purple-500 hover:w-96 sm:hover:w-96 transition-all duration-300 ${
                    isCardActive(4) ? "w-52 sm:w-72" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(4)}
                  onMouseLeave={handleCardLeave}
                ></div>
                <div
                  className={`box p-4 w-12 sm:w-44 h-96 rounded-lg bg-pink-500 hover:w-96 sm:hover:w-96 transition-all duration-300 ${
                    isCardActive(5) ? "w-52 sm:w-72" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(5)}
                  onMouseLeave={handleCardLeave}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
                View all
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section14;
