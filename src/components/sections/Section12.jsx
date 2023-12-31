import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section12 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-base">Recommended for you</h2>
          <span>
            Discover popular artworks and hidden gems from around the world
          </span>
        </div>

        <Slider {...settings}>
          <div className="rounded-lg">
            <div className="group relative w-min-80 h-96 overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute bottom-0 left-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <div>
                  <h2 className="">BANKSY Crayon for Closure, Kolodny</h2>
                  <span className="text-xs">Banksy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="group relative w-min-80 h-96 overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute bottom-0 left-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <div>
                  <h2 className="">BANKSY Crayon for Closure, Kolodny</h2>
                  <span className="text-xs">Banksy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="group relative w-min-80 h-96 overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute bottom-0 left-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <div>
                  <h2 className="">BANKSY Crayon for Closure, Kolodny</h2>
                  <span className="text-xs">Banksy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="group relative w-min-80 h-96 overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 right-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <p className="right-0">
                  <i className="fas fa-heart"></i>
                </p>
              </div>
              <div className="absolute bottom-0 left-0 group-hover:block transition-transform duration-300 transform-gpu p-4">
                <div>
                  <h2 className="">BANKSY Crayon for Closure, Kolodny</h2>
                  <span className="text-xs">Banksy</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Section12;
