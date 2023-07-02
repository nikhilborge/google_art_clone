import React from "react";

const Section3 = () => {
  return (
    <section class="overflow-hidden">
      <div className="bg-[#FDC69C]">
        <div className="pt-12 mx-48 px-8">
          <div className="flex flex-col">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-base">Take a hike</h2>
              <p className="mt-2">Explore a famous pilgrimage route</p>
            </div>

            <div className=" drop-shadow border border-[#C6A082] rounded-lg w-full">
              <div className="flex">
                <div className="p-4 w-2/4">
                  <div className="text-center flex flex-col items-center justify-around w-full h-full">
                    <p className="text-sm mb-12">ONLINE EXIBITION</p>
                    <div>
                      <h2 className="text-xl font-base mb-4">
                        The Camino de Santiago
                      </h2>
                      <p className="text-sm">
                        The legendary origin of the Way of Saint James
                      </p>
                    </div>
                    <div className="mx-auto"></div>
                    <button className="bg-[#1A73E8] px-6 py-2 rounded-lg text-white w-fit">
                      Read
                    </button>
                  </div>
                </div>
                <div className="w-2/4 object-cover">
                  <div className="relative w-full h-full">
                    <img
                      className="w-full h-full object-cover opacity-50 "
                      src="https://placehold.co/600x400@3x.png"
                      alt="Card"
                    />
                    <div className="absolute top-0 right-0">
                      <p>Share icon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="bg-[#174EA6] text-white rounded-full px-4 py-2 text-sm font-normal">
                  Catedral de Santiago
                </div>
                <div className="bg-[#174EA6] text-white rounded-full px-4 py-2 text-sm font-normal">
                  Government of Galicia
                </div>
                <div className="bg-[#174EA6] text-white rounded-full px-4 py-2 text-sm font-normal">
                  Agencia EFE
                </div>
                <div className="bg-[#174EA6] text-white rounded-full px-4 py-2 text-sm font-normal">
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

export default Section3;
