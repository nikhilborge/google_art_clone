import React from 'react'
import ExploreCard from '../ExploreCard';
import playStore from "../../assets/images/play_store.png";
import qr from "../../assets/images/qr.png";
const Section1 = () => {
  return (
    <section className="overflow-hidden">
        <div className="px-8 py-5 pt-24">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-base">Where would you like to go?</h1>
            <p>Choose your experience</p>
          </div>

          <div className="py-4">
            <div className="grid grid-flow-col items-center justify-center auto-cols-max mx-auto gap-4">
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
          <div className="py-4 mx-48 ">
            <div className="bg-[#1A73E8] p-6 rounded-lg flex items-center ">
              <span className="text-white text-4xl mr-4">G</span>
              <h3 className="text-xl font-base text-white">Play on the app</h3>
              <span className="mx-auto text-white text-base">
                Take photos with Art Transfer, find your Art Selfie, and more
              </span>
              <div className="flex items-center gap-2 text-white">
                <div className="flex items-center justify-between">
                  <img className="h-16" src={playStore} alt="google"/>

                  <img className="h-16" src={playStore} alt="store"/>
                </div>
                <div className="h-12 w-12 object-cover p-1 bg-white rounded-lg">
                  <img className="h-full w-full" src={qr} alt="qr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section1