import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import CardNFT2 from "components/CardNFT2";
import UserInfoCard from "components/UserInfoCard/UserInfoCard";
import useCountDownTime from "hooks/useCountDownTime";
import React, { useState } from "react";

const GamePage = () => {
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<any>("");
  const timeLeft = useCountDownTime();

  const handleLikedAction = (nft: any) => {
    if (hasLiked === true) {
      setHasLiked(false);

      setSelectedNFT(undefined);
    } else {
      setHasLiked(true);
      setSelectedNFT(nft);
    }
  };

  return (
    <div className="w-full h-screen">
      <BgGlassmorphism />
      <div className="h-full flex flex-col justify-center z-100 mt-32 p-48">
        <div
          className="w-full border relative rounded-2xl border-0 px-20 py-64"
          style={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
        >
          {" "}
          <div className="absolute -top-20 w-full">
            <UserInfoCard timeLeft={timeLeft} />
          </div>
          <div className="w-96">
            <CardNFT2
              nft={undefined}
              disabled={hasLiked}
              handleLikedAction={handleLikedAction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
