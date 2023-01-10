import axios from "axios";
//get the lowest floor price of an nft contract from the Moralis API
export const getLowestPrice = async (address: string) => {
  const MORALIS_API_KEY =
    "dmzNJPcuHOtqTXYiKP0IuLFm4WpqzUVmnX3W4aMmkvOHCrNlDtEksaTvuCBGaxUD";
  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/nft/${address}/lowestprice`,
    params: { chain: "eth", marketplace: "opensea" },
    headers: { accept: "application/json", "X-API-Key": MORALIS_API_KEY }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err: any) {
    console.log("err.message :>> ", err.message);
    if (err.message == "No price found") {
      return "0";
    }
    return "";
  }
};
