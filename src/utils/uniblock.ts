import axios from "axios";

//get nftInfo from uniblock api
export const getNftInfo = async (address: string, nftId: number) => {
  const options = {
    method: "GET",
    url: `https://api.uniblock.dev/portfolio/v1/nft/nftInfo?chainId=1&nftAddress=${address}&nftId=${nftId}`,
    headers: {
      accept: "application/json"
    }
  };
  try {
    const response = await axios.request(options);
    const optionsUri = {
      method: "GET",
      url: response.data.tokenURI,
      headers: {
        accept: "application/json"
      }
    };
    const responseUri = await axios.request(optionsUri);
    return responseUri.data;
    // return response.data;
  } catch {
    return "";
  }
};
