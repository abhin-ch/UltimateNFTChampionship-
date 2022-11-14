export const nftContractName: string[] = [
  "boardapeyachtclub",
  "mutantapeyachtclub",
  "otherdeedforotherside",
  "10ktf",
  "moonbirds",
  "wassiesbywassies",
  "renga",
  "kpr",
  "veefriends",
  "clonex-xtakashimurakami",
  "proofcollective",
  "azuki",
  "boardapekennelclub",
  "adidasoriginalsintothemetaverse",
  "doodles",
  "pudgypenguins",
  "io:imaginaryones",
  "thepotatoz",
  "noblecards:seasonone",
  "10ktfguccigrail",
  "rareapepeyc",
  "artgobblers",
  "10ktfstockroom",
  "friendshipbraceletsbyalexisandre",
  "wolfgame",
  "flufworld",
  "murakami.flowersofficial",
  "rtfktxrimowameta-artisancollection",
  "privatenation-founderspriates",
  "cryptoninjapartners",
  "genuineundead",
  "[ledger]market-black-on-blacknanox",
  "bullsandapesproject-genesis",
  "qqlmintpass",
  "beanszofficial",
];

type NftCollectionsToAddressType = {
  [key: string]: string;
};

type NftCollectionsToObjectType = {
  [key: string]: {
    name: string;
    address: string;
  };
};

export const nftCollectionToAddress: NftCollectionsToAddressType = {
  boardapeyachtclub: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  mutantapeyachtclub: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  otherdeedforotherside: "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258",
  "10ktf": "0x0Cfb5d82BE2b949e8fa73A656dF91821E2aD99FD",
  moonbirds: "0x23581767a106ae21c074b2276D25e5C3e136a68b",
  wassiesbywassies: "0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea",
  renga: "0x394E3d3044fC89fCDd966D3cb35Ac0B32B0Cda91",
  kpr: "0x05da517B1bf9999B7762EaEfa8372341A1a47559",
  veefriends: "0xa3AEe8BcE55BEeA1951EF834b99f3Ac60d1ABeeB",
  "clonex-xtakashimurakami": "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  proofcollective: "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
  azuki: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  boardapekennelclub: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
  adidasoriginalsintothemetaverse: "0x28472a58A490c5e09A238847F66A68a47cC76f0f",
  doodles: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
  pudgypenguins: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
  "io:imaginaryones": "0x716F29B8972D551294d9E02B3eb0fC1107FbF4aA",
  thepotaotz: "0x39ee2c7b3cb80254225884ca001F57118C8f21B6",
  "noblecards:seasonone": "0x7e9b9bA1A3B4873279857056279Cef6A4FCDf340",
  rareapepeyc: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  artgobblers: "0x60bb1e2AA1c9ACAfB4d34F71585D7e959f387769",
  "10ktfstockroom": "0x7DaEC605E9e2a1717326eeDFd660601e2753A057",
  friendshipbraceletsbyalexisandre:
    "0x942BC2d3e7a589FE5bd4A5C6eF9727DFd82F5C8a",
  wolfgame: "0x7F36182DeE28c45dE6072a34D29855BaE76DBe2f",
  flufworld: "0xCcc441ac31f02cD96C153DB6fd5Fe0a2F4e6A68d",
  "murakami.flowersofficial": "0x7D8820FA92EB1584636f4F5b8515B5476B75171a",
  rtfktxrimowametaartisancollection:
    "0x253ef258563E146f685e60219DA56a6b75178E19",
  privatenationfounderspriates: "0x31fe9d95ddE43cf9893b76160F63521a9e3D26B0",
  cryptoninjapartners: "0x845a007D9f283614f403A24E3eB3455f720559ca",
  genuineundead: "0x209e639a0EC166Ac7a1A4bA41968fa967dB30221",
  "[ledger]market-black-on-blacknanox":
    "0x0f77625B76e3831914d47a5034323290f9Ce8A9E",
  "bullsandapesproject-genesis": "0x2Cf6BE9AaC1c7630d5A23af88c28275C70eb8819",
  qqlmintpass: "0xc73B17179Bf0C59cD5860Bb25247D1D1092c1088",
  beanszofficial: "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949",
};

//propeties include name and address from nftCollectionToAddress
export const nftCollectionObject: NftCollectionsToObjectType = {
  boardapeyachtclub: {
    name: "Board Ape Yacht Club",
    address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
  },
  mutantapeyachtclub: {
    name: "Mutant Ape Yacht Club",
    address: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  },
  otherdeedforotherside: {
    name: "Other Deed For Other Side",
    address: "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258",
  },
  "10ktf": {
    name: "10KTf",
    address: "0x0Cfb5d82BE2b949e8fa73A656dF91821E2aD99FD",
  },
  moonbirds: {
    name: "Moonbirds",
    address: "0x23581767a106ae21c074b2276D25e5C3e136a68b",
  },
  wassiesbywassies: {
    name: "Wassies by Wassies",
    address: "0x1D20A51F088492A0f1C57f047A9e30c9aB5C07Ea",
  },
  renga: {
    name: "Renga",
    address: "0x394E3d3044fC89fCDd966D3cb35Ac0B32B0Cda91",
  },
  kpr: {
    name: "KPR",
    address: "0x05da517B1bf9999B7762EaEfa8372341A1a47559",
  },
  veefriends: {
    name: "VeeFriends",
    address: "0xa3AEe8BcE55BEeA1951EF834b99f3Ac60d1ABeeB",
  },
  "clonex-xtakashimurakami": {
    name: "CloneX x Takashi Murakami",
    address: "0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B",
  },
  proofcollective: {
    name: "Proof Collective",
    address: "0x08D7C0242953446436F34b4C78Fe9da38c73668d",
  },
  azuki: {
    name: "Azuki",
    address: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
  },
  boardapekennelclub: {
    name: "Board Ape Kennel Club",
    address: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
  },
  adidasoriginalsintothemetaverse: {
    name: "adidas Originals Into The Metaverse",
    address: "0x28472a58A490c5e09A238847F66A68a47cC76f0f",
  },
  doodles: {
    name: "Doodles",
    address: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
  },
  pudgypenguins: {
    name: "Pudgy Penguins",
    address: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
  },
  "io:imaginaryones": {
    name: "IO: Imaginary Ones",
    address: "0x716F29B8972D551294d9E02B3eb0fC1107FbF4aA",
  },
  thepotaotz: {
    name: "The Potaotz",
    address: "0x39ee2c7b3cb80254225884ca001F57118C8f21B6",
  },
  rareapepeyc: {
    name: "Rare Ape Peyc",
    address: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
  },
  artgobblers: {
    name: "Art Gobblers",
    address: "0x60bb1e2AA1c9ACAfB4d34F71585D7e959f387769",
  },
  friendshipbraceletsbyalexisandre: {
    name: "Friendship Bracelets by Alexis Andre",
    address: "0x942BC2d3e7a589FE5bd4A5C6eF9727DFd82F5C8a",
  },
  wolfgame: {
    name: "Wolf Game",
    address: "0x7F36182DeE28c45dE6072a34D29855BaE76DBe2f",
  },
  flufworld: {
    name: "Fluf World",
    address: "0xCcc441ac31f02cD96C153DB6fd5Fe0a2F4e6A68d",
  },
  rtfktxrimowametaartisancollection: {
    name: "RTFKT x Rimowa Meta Artisan Collection",
    address: "0x253ef258563E146f685e60219DA56a6b75178E19",
  },
  privatenationfounderspriates: {
    name: "Private Nation Founders Priates",
    address: "0x31fe9d95ddE43cf9893b76160F63521a9e3D26B0",
  },
  cryptoninjapartners: {
    name: "Crypto Ninja Partners",
    address: "0x845a007D9f283614f403A24E3eB3455f720559ca",
  },
  genuineundead: {
    name: "Genuine Undead",
    address: "0x209e639a0EC166Ac7a1A4bA41968fa967dB30221",
  },
  "bullsandapesproject-genesis": {
    name: "Bulls and Apes Project - Genesis",
    address: "0x2Cf6BE9AaC1c7630d5A23af88c28275C70eb8819",
  },
  qqlmintpass: {
    name: "QQL Mint Pass",
    address: "0xc73B17179Bf0C59cD5860Bb25247D1D1092c1088",
  },
  beanszofficial: {
    name: "Beansz Official",
    address: "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949",
  },
};
