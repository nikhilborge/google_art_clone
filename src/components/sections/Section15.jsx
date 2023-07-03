import React from "react";
import HeadTitle from "../ui/HeadTitle";

const Section15 = () => {
  const exploredata = [
    {
      img: "https://placehold.co/600x400@3x.png",
      logo:"Logo",
      content:"UNESCO World Heritage The United Nations Education",
    },
    {
      img: "https://placehold.co/600x400@3x.png",
      logo:"Logo",
      content:"UNESCO World Heritage The United Nations Education",
    },
    {
      img: "https://placehold.co/600x400@3x.png",
      logo:"Logo",
      content:"UNESCO World Heritage The United Nations Education",
    },
    {
      img: "https://placehold.co/600x400@3x.png",
      logo:"Logo",
      content:"UNESCO World Heritage The United Nations Education",
    },
  ];
  return (
    <section className="overflow-hidden">
      <div className="">
        <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
          <div className="text-center mb-12">
            <div className="group relative w-full h-64 sm:h-96 bg-slate-800 rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-50"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white">
                <div className="text-center">
                  <h2 className="text-4xl font-medium mb-2 my-12">
                    How Does 'The Scream' Connect to Sea Turtles?
                  </h2>
                  <p className="text-sm font-base my-8">
                    Discover connections between culture with Machine Learning
                  </p>
                  <button className="rounded border-white border px-6 py-2 mt-4 mx-auto">
                    <span className="text-base font-normal">
                      Start Finding connections
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <HeadTitle
              title=" Explore collections preserving our past"
              subTitle="Keeping our shared history alive"
            />
            <div className="flex flex-wrap justify-center gap-4">

            {exploredata?.map((ele, idx) => (
              <div className="w-full sm:w-auto mb-8 sm:mb-0 mx-auto">
                <div className="transition-transform duration-300 rounded-lg">
                  <div className="group relative w-80 sm:w-full h-40 rounded-lg overflow-hidden">
                    <div className="bg-cover h-full">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                        src={ele?.img}
                        alt="Card"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="flex justify-center items-end h-full">
                        <div className="p-4 bg-white rounded-tl-lg rounded-tr-lg w-40 h-24">
                          <div className="text-center">
                            <span>{ele?.logo}</span>
                            <p className="text-xs">
                              {ele?.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
              
            </div>

            <div className="flex items-center justify-center mt-12">
              <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
                More Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section15;
