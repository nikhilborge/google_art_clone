import React from "react";
import ExploreCard from "../../components/ExploreCard"

const Section19 = () => {
  return (
    <section className="overflow-hidden">
      <div className="px-4 py-5 pt-24 sm:px-8">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-base">Keep exploring...</h1>
          <p>Dive into culture from around the world</p>
        </div>

        <div className="py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
          
            <ExploreCard
              title="Virtual Tour"
              name="Lincon Memorial"
              sub="Explore the neoclassical temple"
            />
            <ExploreCard
              title="Game"
              name="Into Nature"
              sub="A Moment of claim with the game"
            />
            <ExploreCard
              title="Museum guide"
              name="A Manga Museum"
              sub="Inside the Kitakyushu Museum"
            />
            <ExploreCard
              title="Art Explorer"
              name="Barcelona"
              sub="Tour the best of the city Culture"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section19;
