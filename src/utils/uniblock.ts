import axios from "axios";

//get nftInfo from uniblock api
export const getNftInfo = async (address: string, nftId: number) => {
  const options = {
    method: "GET",
    url: `https://api.uniblock.dev/portfolio/v1/nft/nftInfo?chainId=1&nftAddress=${address}&nftId=${nftId}`,
    headers: {
      accept: "application/json",
    },
  };
  try {
    // get token uri from uniblock api
    const response = await axios.request(options);

    const optionsUri = {
      method: "GET",
      url: response.data.tokenURI,
      headers: {
        accept: "application/json",
      },
      withCredentials: false
    };

    // get nft info from token uri
    const responseUri = await axios.request(optionsUri);
    return responseUri.data;
  } catch {
    return "";
  }
};
