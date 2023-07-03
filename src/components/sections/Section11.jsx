import React, { useState } from "react";
import HeadTitle from "../ui/HeadTitle";
import ColorBox from "../ui/ColorBox";

const Section11 = () => {
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
    <section className="overflow-hidden">
      <div className="">
        <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
        <HeadTitle title="What's your favorite color?" subTitle="Discover over 100,000 artworks by color"/>
          
          <div className="flex justify-center items-center">
            <div className="flex relative w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 space-x-4">
              {/* <ColorBox name="Teal" color="bg-[#51C1AF]" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/> */}
              <ColorBox name="Teal" color="bg-[#51C1AF]"/>
              <ColorBox name="Blue" color="bg-[#1BA8EF]"/>
              <ColorBox name="Purple" color="bg-[#BE8EE5]"/>
              <ColorBox name="Pink" color="bg-[#FE5B97]"/>
              <ColorBox name="Red" color="bg-[#FE0100]"/>
              <ColorBox name="Orange" color="bg-[#FC5D00]"/>
              <ColorBox name="Orange" color="bg-[#FCFC02]"/>
              <ColorBox name="Green" color="bg-[#01FE00]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
