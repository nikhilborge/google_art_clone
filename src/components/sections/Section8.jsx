import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadTitle from "../ui/HeadTitle";
import SliderCard from "../ui/SliderCard";

const Section8 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        <HeadTitle
          title="Recommended for you"
          subTitle="Discover popular artworks and hidden gems from around the world"
        />
        <Slider {...settings}>
          <SliderCard
            img="https://placehold.co/600x400@3x.png"
            title="BANKSY Crayon for Closure, Kolodny"
            sub="Banksy"
          />
          <SliderCard
            img="https://placehold.co/600x400@3x.png"
            title="BANKSY Crayon for Closure, Kolodny"
            sub="Banksy"
          />
          <SliderCard
            img="https://placehold.co/600x400@3x.png"
            title="BANKSY Crayon for Closure, Kolodny"
            sub="Banksy"
          />
          <SliderCard
            img="https://placehold.co/600x400@3x.png"
            title="BANKSY Crayon for Closure, Kolodny"
            sub="Banksy"
          />
          <SliderCard
            img="https://placehold.co/600x400@3x.png"
            title="BANKSY Crayon for Closure, Kolodny"
            sub="Banksy"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Section8;
