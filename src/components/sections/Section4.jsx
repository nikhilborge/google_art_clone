import React, { useState } from "react";

const Section4 = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const cards = [
    {
      title: "The Oregon Trail",
      image: "https://placehold.co/600x400@3x.png",
    },
    {
      title: "Card 2",
      image: "https://placehold.co/600x400@3x.png",
    },
    {
      title: "Card 3",
      image: "https://placehold.co/600x400@3x.png",
    },
    {
      title: "Card 4",
      image: "https://placehold.co/600x400@3x.png",
    },
    {
      title: "Card 5",
      image: "https://placehold.co/600x400@3x.png",
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="bg-[#FDC69C]">
        <div className="pt-12 px-4 sm:mx-auto sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
          <div className="flex flex-col">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-base">Old ways around the world</h2>
            </div>
            <div className="flex flex-wrap justify-center -space-x-4 sm:-space-x-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={` ${index >= cards.length - 3 ? 'small-disable' : ''}  transition-transform duration-300 z-[${index}] rounded-lg border border-slate-800 border-2 bg-slate-500 hover:z-10 hover:scale-105 w-full sm:w-64 h-96 ${
                    activeCard === index ? "z-20" : ""
                  } sm:mb-4 md:mb-8`}
                  onMouseEnter={() => handleCardHover(index)}
                >
                  <div className="group relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                      src={card.image}
                      alt="Card"
                    />
                    <div className="absolute bottom-0 left-0 p-4 text-white ">
                      <div className="text-center h-full">
                        <h2 className="text-xl font-base mb-2">
                          {card.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-8"></div>
      </div>
    </section>
  );
};

export default Section4;
