import { nftContractName, nftCollectionToAddress } from 'contains/collections';
import { getLowestPrice } from './moralis';
import { getNftInfo } from './uniblock';
import { BigNumber, ethers } from 'ethers';

type NftInfo = {
  name: string;
  image: string;
  price: string;
  usdPrice: string;
  round: number;
  selected: number;
  address: string;
  nftId: number;
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
    let nftInfo1 = {
      name: '',
      image: '',
      price: '',
      usdPrice: '',
      round: 1,
      selected: -1
    };
    const nftInfo = await getNftInfo(contractAddresses[i], 1);
    let nftPrice: string = '';
    for (let j = 0; j < 50; j++) {
      console.log(nftInfo.name, 'try #: ', j);
      const moralisResult = (await getLowestPrice(contractAddresses[i])) ?? '';

      if (moralisResult) {
        nftPrice = ethers.utils.formatEther(
          BigNumber.from(moralisResult.price)
        );
        // nftPrice = moralisResult.price;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    const nftUSDPrice = (Number(nftPrice) * 1212).toFixed(2).toString();
    if (nftInfo.image && nftInfo.image.includes('ipfs://')) {
      console.log('nftInfo.name :>> ', nftInfo.name);
      nftInfo.image = await fetchImage(nftInfo.image.split('ipfs://')[1]);
    }
    if (!nftInfo.image) {
      console.log('nftInfo.address :>> ', contractAddresses[i]);
    }
    results.push({
      name: nftInfo.name,
      image: nftInfo.image,
      price: nftPrice,
      usdPrice: nftUSDPrice,
      round: 1,
      selected: -1,
      address: contractAddresses[i],
      nftId: 1
    });
  }
  console.log('results: ', results);
  return results;
};

const fetchImage = async (hash: string) => {
  const url = `https://ipfs.gateway.io/ipfs/${hash}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image, status: ${response.status}`);
    }
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    return imgUrl;
  } catch (error) {
    console.error(error);
  }
};
