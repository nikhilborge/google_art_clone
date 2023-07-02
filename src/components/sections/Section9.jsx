import React from "react";

const Section9 = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-[#000]">
        <div className="pt-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48 px-8">
          <div className="flex flex-col">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-base text-white">Jazzy Jackets</h2>
              <p className="mt-2 text-white">Fun, fashionable, or far out?</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="transition-transform duration-300 rounded-lg">
                <div className="group relative rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                    src="https://placehold.co/600x400@3x.png"
                    alt="Card"
                  />
                  <div className="absolute hidden transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                    <h2 className="text-base font-medium">An 80s Ensemble</h2>
                    <p className="text-xs">Thierry Mugler [Left] Thierry Mugler [Center] Thierry Mugler [Right]</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="transition-transform duration-300 rounded-lg">
                  <div className="group relative rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                      src="https://placehold.co/600x400@3x.png"
                      alt="Card"
                    />
                    <div className="absolute hidden transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                      <h2 className="text-base font-medium">Decorative</h2>
                      <p className="text-xs">Agatha Ruiz de la Parda</p>
                    </div>
                  </div>
                </div>

                <div className="transition-transform duration-300 rounded-lg">
                  <div className="group relative rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                      src="https://placehold.co/600x400@3x.png"
                      alt="Card"
                    />
                    <div className="absolute hidden transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                      <h2 className="text-base font-medium">Spiky Dino Sleeves</h2>
                      <p className="text-xs">Issey Miyake</p>
                    </div>
                  </div>
                </div>

                <div className="transition-transform duration-300 rounded-lg">
                  <div className="group relative rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                      src="https://placehold.co/600x400@3x.png"
                      alt="Card"
                    />
                    <div className="absolute hidden transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                      <h2 className="text-base font-medium">Punk Pieces</h2>
                      <p className="text-xs">Malcolm McLaren & Vivienne Westwood</p>
                    </div>
                  </div>
                </div>

                <div className="transition-transform duration-300 rounded-lg">
                  <div className="group relative rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-300 transform-gpu scale-100 group-hover:scale-105"
                      src="https://placehold.co/600x400@3x.png"
                      alt="Card"
                    />
                    <div className="absolute hidden transition-transform duration-300 transform-gpu group-hover:block bottom-0 left-0 p-4">
                      <h2 className="text-base font-medium">Balenciaga x Bullfighters</h2>
                      <p className="text-xs">Cristóbal Balenciaga</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-48">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-base text-white">Take your new jacket for a spin...</h2>
              <p className="mt-2 text-white">Pick a destination or an activity</p>
            </div>

            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-2">
                <div className="bg-[#ffff] text-black rounded-full px-4 py-2 text-sm font-normal mb-2 sm:mb-0">
                  Catedral de Santiago
                </div>
                <div className="bg-[#ffff] text-black rounded-full px-4 py-2 text-sm font-normal mb-2 sm:mb-0">
                  Government of Galicia
                </div>
                <div className="bg-[#ffff] text-black rounded-full px-4 py-2 text-sm font-normal mb-2 sm:mb-0">
                  Agencia EFE
                </div>
                <div className="bg-[#ffff] text-black rounded-full px-4 py-2 text-sm font-normal mb-2 sm:mb-0">
                  Explore the whole project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
