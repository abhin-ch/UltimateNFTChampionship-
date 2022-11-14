import axios from "axios";

//get the lowest floor price of an nft contract from the Moralis API
export const getLowestPrice = async (address: string) => {
  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/nft/${address}/lowestprice`,
    params: { chain: "eth", marketplace: "opensea" },
    headers: { accept: "application/json", "X-API-Key": "test" },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
