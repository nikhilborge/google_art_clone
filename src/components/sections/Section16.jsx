import React from "react";
import ColorBox from "../ui/ColorBox";

const Section16 = () => {
 
  return (
    <div
      className="bg-[#FEF6E0]"
      style={{
        backgroundImage: "url('https://lh3.googleusercontent.com/ci/AJFM8ryf6zQdldKJi9_cMiAN5HGZ1D4FvlVKn9pD56x29x09B_IM8P04bLjkAWHAa7CJUoy_p4G4Cc4=w1898-h877-pp-rw-v1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="overflow-hidden">
        <div className="">
          <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
            <div className="text-center mb-12 text-white">
              <h2 className="text-4xl font-base text-white">Get lost in op art</h2>
              <p>Eye catching illusions and mind-bending patterns</p>
            </div>

            <div className="flex justify-center items-center mb-12">
              <div className="flex relative w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 space-x-4">
              <ColorBox name="The Nazica Lines" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/>
              <ColorBox name="The Nazica Lines" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/>
              <ColorBox name="The Nazica Lines" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/>
              <ColorBox name="The Nazica Lines" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/>
              <ColorBox name="The Nazica Lines" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/>
              <ColorBox name="The Nazica Lines" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1"/>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
                What is Op Art?
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section16;
