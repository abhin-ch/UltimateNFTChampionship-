import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import { nftsImgs } from "contains/fakeData";
import ItemTypeImageIcon from "./ItemTypeImageIcon";
import LikeButton from "./LikeButton";
import ItemTypeVideoIcon from "./ItemTypeVideoIcon";
import Prices from "./Prices";
import RemainingTimeNftCard from "./RemainingTimeNftCard";

export interface CardNFT2Props {
  className?: string;
  isLiked?: boolean;
  disabled?: boolean;
  handleLikedAction?: any;
  nft: any;
}

const CardNFT2: FC<CardNFT2Props> = ({
  className = "",
  disabled,
  handleLikedAction,
  nft,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleSelectedNft = () => {
    handleLikedAction("nft");
    setIsLiked(!isLiked);
  };
  return (
    <div
      className={`nc-CardNFT2 relative bg-white dark:bg-neutral-900 rounded-3xl flex flex-col group p-2.5  ${className}`}
      data-nc-id="CardNFT2"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-3xl overflow-hidden z-0"
            src={nftsImgs[Math.floor(1)]}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
        </div>

        {/* LIKE AND AVATARS */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center space-x-2">
          <LikeButton
            handleSelectedNft={handleSelectedNft}
            disabled={disabled}
            liked={isLiked}
            className=" !h-9"
          />
        </div>

        <div className="absolute left-[-1px] bottom-[-0.4px] ">
          <svg
            className="text-white dark:text-neutral-900 w-64 md:w-[281px]"
            width="281"
            viewBox="0 0 281 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0V99H258.059C248.54 99 239.92 93.3743 236.089 84.6606L205.167 14.3394C201.335 5.62568 192.716 0 183.197 0H0Z"
              fill="currentColor"
            />
          </svg>

          <div className="absolute left-4 top-5 w-48 ">
            <h2 className={`text-lg font-semibold `}>CloneF #{1000}</h2>
          </div>
        </div>
      </div>

      <Link
        to=""
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
          handleSelectedNft();
        }}
        className="absolute inset-0"
      ></Link>
    </div>
  );
};

export default CardNFT2;
