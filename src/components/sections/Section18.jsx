import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadTitle from "../ui/HeadTitle";

const Section18 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slick-prev">
        <i className="fas fa-chevron-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <i className="fas fa-chevron-right"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="overflow-hidden">
      <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
      <HeadTitle title="Recommended for you" subTitle="Discover popular artworks and hidden gems from around the world"/>
        <Slider {...settings}>
          <div className="rounded-lg mx-2">
            <div className="group relative w-min-72 mx-2 h-64 overflow-hidden cursor-pointer flex justify-center items-center">
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-125"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-white text-2xl font-bold">3D</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg mx-2">
            <div className="group relative w-min-72 mx-2 h-64 overflow-hidden cursor-pointer flex justify-center items-center">
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-125"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-white text-2xl font-bold">3D</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg mx-2">
            <div className="group relative w-min-72 mx-2 h-64 overflow-hidden cursor-pointer flex justify-center items-center">
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-125"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-white text-2xl font-bold">3D</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg mx-2">
            <div className="group relative w-min-72 mx-2 h-64 overflow-hidden cursor-pointer flex justify-center items-center">
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-125"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-white text-2xl font-bold">3D</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg mx-2">
            <div className="group relative w-min-72 mx-2 h-64 overflow-hidden cursor-pointer flex justify-center items-center">
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-125"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-white text-2xl font-bold">3D</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg mx-2">
            <div className="group relative w-min-72 mx-2 h-64 overflow-hidden cursor-pointer flex justify-center items-center">
              <img
                className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-125"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <p className="text-white text-2xl font-bold">3D</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex items-center justify-center py-4">
        <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
          Search 3D object
        </button>
      </div>
    </section>
  );
};

export default Section18;
