import { nftContractName, nftCollectionToAddress } from "contains/collections";
import { getLowestPrice } from "./moralis";
import { getNftInfo } from "./uniblock";
import { ethers, logger } from "ethers";
import { wait } from "@testing-library/user-event/dist/types/utils";

type NftInfo = {
  name: string;
  image: string;
  price: string;
  usdPrice: string;
  round: number;
  selected: number;
};

//generate a random list of 9 unique nft contract names from nftContractName
export const getContractAddresses = () => {
  const randomNFTs: string[] = [];
  const contractAddresses: string[] = [];
  while (randomNFTs.length < 9) {
    const randomNFT =
      nftContractName[Math.floor(Math.random() * nftContractName.length)];
    if (!randomNFTs.includes(randomNFT)) {
      randomNFTs.push(randomNFT);
      contractAddresses.push(nftCollectionToAddress[randomNFT]);
    }
  }
  return contractAddresses;
};

// return a list of 9 random objects of NftInfo
export const getNftsInfo = async (): Promise<NftInfo[]> => {
  const contractAddresses = getContractAddresses();
  const results: NftInfo[] = [];

  // while loop
  for (let i = 0; i < contractAddresses.length; i++) {
    const nftInfo = await getNftInfo(contractAddresses[i], 1);
    let nftPrice: string = "";
    for (let j = 0; j < 50; j++) {
      console.log(nftInfo.name, "try #: ", j);
      const moralisResult = (await getLowestPrice(contractAddresses[i])) ?? "";

      if (moralisResult) {
        console.log("nftPrice :>> ", nftPrice);
        nftPrice = ethers.utils.formatEther(Number(moralisResult.price));
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    const nftUSDPrice = (Number(ethers.utils.formatEther(nftPrice)) * 1212)
      .toFixed(2)
      .toString();
    results.push({
      name: nftInfo.name,
      image: nftInfo.string,
      price: nftPrice,
      usdPrice: nftUSDPrice,
      round: 1,
      selected: -1
    });
  }
  return results;
};
