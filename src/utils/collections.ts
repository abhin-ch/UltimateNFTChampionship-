import {
  nftContractName,
  nftCollectionToAddress,
  nftCollectionObject,
} from "contains/collections";
import { getLowestPrice } from "./moralis";

//generate a random list of 9 unique nft contract names from nftContractName
export const getRandomNFTs = () => {
  const randomNFTs: string[] = [];
  while (randomNFTs.length < 9) {
    const randomNFT =
      nftContractName[Math.floor(Math.random() * nftContractName.length)];
    if (!randomNFTs.includes(randomNFT)) {
      randomNFTs.push(randomNFT);
    }
  }
  return randomNFTs;
};

//return a list of 9 addresses from random nfts
export const getContractAddresses = () => {
  const randomNFTs = getRandomNFTs();
  const contractAddresses: string[] = [];
  randomNFTs.forEach((nft: string) => {
    contractAddresses.push(nftCollectionToAddress[nft]);
  });
  return contractAddresses;
};

//return a list of 9 lowest prices from contract addresses
export const getLowestPrices = async () => {
  const contractAddresses = getContractAddresses();
  const lowestPrices: any[] = [];
  contractAddresses.forEach((address: string) => {
    let price: any = getLowestPrice(address);
    // if lowest price doesn't have property price set price to 0
    if (!price.price) {
      const temp = {
        name: nftCollectionObject[address].name,
        address: address,
        price: 0,
      };
      price = temp;
    }
    lowestPrices.push(price);
  });
  return lowestPrices;
};
