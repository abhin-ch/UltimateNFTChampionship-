import React, { FC } from "react";

import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";
import imagePng from "images/hero3.png";
import { useNavigate } from "react-router-dom";

export interface SectionHero3Props {
  className?: string;
}

const SectionHero3: FC<SectionHero3Props> = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="mt-10 lg:mt-0 lg:absolute lg:container z-10 inset-x-0 top-[10%] sm:top-[20%]">
        <div className="flex flex-col items-start max-w-2xl space-y-5 xl:space-y-8 ">
          <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[120%] ">
            Ultimate
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            NFT Championship
          </h2>
        </div>

        {/* <HeroSearchForm className="mt-5 lg:mt-24 2xl:mt-40" /> */}

        {/* Play Button */}
        <div className="py-20 ">
          <div className="w-1/3 h-24 relative xl:mt-8 flex flex-col lg:flex-row rounded-[30px] md:rounded-[36px] lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700 lg:divide-y-0">
            <div className="grid w-screen place-items-center">
              <ButtonPrimary onClick={() => navigate("/user")}>
                Enter Game
              </ButtonPrimary>
            </div>

            <div></div>
          </div>
        </div>
      </div>
      <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9">
        <img
          className="absolute inset-0 object-cover rounded-[32px]"
          src={imagePng}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default SectionHero3;
