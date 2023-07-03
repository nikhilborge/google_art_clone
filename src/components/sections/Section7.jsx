import React from "react";
import ShareCard from "../ui/ShareCard";

const Section7 = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-12 mx-4 sm:mx-8 md:mx-16 lg:mx-48 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-base">Lucky dip!</h2>
        </div>

        <div className="flex flex-wrap items-center justify-around">
          <ShareCard
            title="Museum of the Day"
            sub="Salar Jung Museum, India"
            link="COLLECTION"
            img="https://placehold.co/600x400@3x.png"
          />
          <ShareCard
            title="Museum of the Day"
            sub="Salar Jung Museum, India"
            link="COLLECTION"
            img="https://placehold.co/600x400@3x.png"
          />
          <ShareCard
            title="Museum of the Day"
            sub="Salar Jung Museum, India"
            link="COLLECTION"
            img="https://placehold.co/600x400@3x.png"
          />
          <ShareCard
            title="Museum of the Day"
            sub="Salar Jung Museum, India"
            link="COLLECTION"
            img="https://placehold.co/600x400@3x.png"
          />
        </div>

        <div className="py-4">
          <div className="bg-[#1A73E8] p-6 rounded-lg flex items-center justify-center bg">
            <div className="text-white text-4xl mr-4"></div>
            <div className="flex flex-col ml-4">
              <p className="text-white text-xl">Follow Us on Instagram</p>
              <span className="text-white text-sm">
                Keep up with the latest from arts and culture
              </span>
            </div>
            <div className="flex items-center gap-2 text-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
