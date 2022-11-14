import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import CardNFT2 from "components/CardNFT2";
import UserInfoCard from "components/UserInfoCard/UserInfoCard";
import useCountDownTime from "hooks/useCountDownTime";
import React, { useEffect, useState } from "react";
import { getNftsInfo } from "utils/collections";

const GamePage = () => {
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<any>("");
  const timeLeft = useCountDownTime();
  const [nfts, setNfts] = useState<any>(undefined);

  useEffect(() => {
    const getData = async () => {
      const tempNfts = await getNftsInfo();
      let tempAray = [];
      for (let key in tempNfts) {
        let value = tempNfts[key];
        tempAray.push(value);
      }
      setNfts(tempAray);
    };

    void getData();
  }, []);

  const handleLikedAction = (nft: any) => {
    if (hasLiked === true) {
      setHasLiked(false);

      setSelectedNFT(undefined);
    } else {
      setHasLiked(true);
      setSelectedNFT(nft);
    }
  };

  const goToNextRound = () => {};

  useEffect(() => {
    if (timeLeft.seconds === 0) {
      goToNextRound();
    }
  }, [timeLeft]);

  return (
    <div className="w-full h-screen">
      <BgGlassmorphism />
      <div className="h-full flex flex-col z-100">
        <div
          className="w-full border relative rounded-2xl border-0 px-20 mt-32"
          style={{ backgroundColor: "rgba(243, 244, 246, 0.8)" }}
        >
          {" "}
          <div className="absolute -top-20 w-full">
            <UserInfoCard timeLeft={timeLeft} />
          </div>
          <div>
            <div className="  grid grid-cols-3 gap-8 w-full">
              {nfts &&
                nfts.map((nft: any) => (
                  <CardNFT2
                    nft={nft}
                    disabled={hasLiked}
                    handleLikedAction={handleLikedAction}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
