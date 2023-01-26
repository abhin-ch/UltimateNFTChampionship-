import React, { FC } from "react";

import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";
import imagePng from "images/hero/ultimatenft.gif";
import { useNavigate } from "react-router-dom";
import styles from "./SectionHero.module.css";

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
      <div className="mt-0 absolute h-1/2 lg:container flex flex-col gap-8 justify-center items-center text-center z-10 inset-x-0 top-[10%] sm:top-[20%]">
        <div className="flex flex-col items-start max-w-3xl space-y-5 xl:space-y-8 ">
          <h2
            style={{
              fontFamily: "PressStart2P",
              color: "#ff4e7d",
              textShadow: "5px 3px 4px #1fb146",
            }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl !leading-[120%] "
          >
            Ultimate NFT
          </h2>
        </div>

        {/* <HeroSearchForm className="mt-5 lg:mt-24 2xl:mt-40" /> */}

        {/* Play Button */}
        <div style={{ maxWidth: "600px", minWidth: "400px" }}>
          <ButtonPrimary
            className={styles.startBtn}
            onClick={() => navigate("/user")}
          >
            <h1 style={{ fontFamily: "PressStart2P" }}>Start</h1>{" "}
          </ButtonPrimary>
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
