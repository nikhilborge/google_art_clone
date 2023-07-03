import React from "react";
import HeadTitle from "../ui/HeadTitle";
import ColorBox from "../ui/ColorBox";

const Section13 = () => {

  return (
    <div className="bg-[#FEF6E0]">
      <section className="overflow-hidden">
        <div className="">
          <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
          <HeadTitle title="5 artworks inspired by 'Earth'" subTitle="Great art, grounded"/>

            <div className="flex justify-center items-center mb-12">
              <div className="flex relative w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 space-x-4">
              <ColorBox name="The Nazica Lines" sub="Unknown" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1" />
              <ColorBox name="The Nazica Lines" sub="Unknown" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1" />
              <ColorBox name="The Nazica Lines" sub="Unknown" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1" />
              <ColorBox name="The Nazica Lines" sub="Unknown" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1" />
              <ColorBox name="The Nazica Lines" sub="Unknown" color="bg-black" img="https://lh3.googleusercontent.com/ci/AJFM8rzlI8otWEc9GIUuMk4xkuMVA5UClo4nqaHzmt6J_XSVeHoG-MR0ilYybqUsJUkenhmSe1afR1c=w487-c-h567-rw-v1" />
              </div>
            </div>

            <div className="group relative w-full h-64 sm:h-96 bg-slate-800 rounded-lg">
              <img
                className="w-full h-full object-cover opacity-50"
                src="https://placehold.co/600x400@3x.png"
                alt="Card"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white">
                <div className="text-center">
                  <h2 className="text-4xl font-medium mb-2 my-12">
                  A Gallery of the Four Elements
                  </h2>
                  <p className="text-sm font-base my-8">
                  A virtual gallery of air, fire, water, and earth
                  </p>
                  <button className="rounded border-white border px-6 py-2 mt-4 mx-auto">
                    <span className="text-base font-normal ">
                      View
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Section13;
