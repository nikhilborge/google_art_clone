import React, { useState } from "react";
import HeadTitle from "../ui/HeadTitle";
import ColorBox from "../ui/ColorBox";

const Section14 = () => {


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
          <HeadTitle  title="Six unique ecosystems" subTitle="How the same planet can feel like completely different worlds" />

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
