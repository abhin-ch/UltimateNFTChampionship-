import { wait } from "@testing-library/user-event/dist/types/utils";
import {
  nftContractName,
  nftCollectionToAddress,
  nftCollectionObject
} from "contains/collections";
import { getLowestPrice } from "./moralis";
import { getNftInfo } from "./uniblock";
import { ethers } from "ethers";

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

export const getNftsInfo = async () => {
  const contractAddresses = getContractAddresses();
  let nftsNames: any[] = [];
  let nftImages: any[] = [];
  let nftPrices: any[] = [];
  let nftUSDPrices: any[] = [];

  const results: any = {};

  // while loop
  for (let i = 0; i < contractAddresses.length; i++) {
    let nftInfo1 = {
      name: "",
      image: "",
      price: "",
      usdPrice: "",
      round: 1,
      selected: -1
    };
    const nftInfo = await getNftInfo(contractAddresses[i], 1);
    const nftPrice = await getLowestPrice(contractAddresses[i]);
    nftsNames.push(nftInfo.name);
    nftInfo1.name = nftInfo.name;
    nftImages.push(nftInfo.image);
    nftInfo1.image = nftInfo.image;
    if (nftPrice) {
      nftPrices.push(ethers.utils.formatEther(nftPrice.price));
      nftInfo1.price = ethers.utils.formatEther(nftPrice.price);
      const nftUSDPrice =
        Number(ethers.utils.formatEther(nftPrice.price)) * 1212;
      nftUSDPrices.push(nftUSDPrice.toFixed(2).toString());
      nftInfo1.usdPrice = nftUSDPrice.toFixed(2).toString();
    } else {
      nftPrices.push("0");
      nftInfo1.price = "0";
      nftUSDPrices.push("0");
      nftInfo1.usdPrice = "0";
    }
    results[contractAddresses[i]] = nftInfo1;
  }

  // contractAddresses.forEach(async (address: string) => {
  //   let nftInfo: any = await getNftInfo(address, 1);
  //   let nftPrice: any = await getLowestPrice(address);
  //   // add 1 second delay
  //   nftsNames.push(await nftInfo.name);
  //   nftImages.push(await nftInfo.image);
  //   nftPrices.push(await nftPrice);
  //   // add a 1 second delay
  //   await wait(1000);
  // });
  return results;
};
