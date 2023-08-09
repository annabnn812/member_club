import SimpleCrypto from "simple-crypto-js"

/*
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim() */


const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
//0xaD96c0b51D5be8C190F2d7cdABbFd4173Af2b06c
const ethraw = ""

//hardhat
const hhraw = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
HardHat Testnet
*/
//address LoyaltyClub.sol 
export var hhsell = "0x22";
var hhrpc = "http://localhost:8545";


/*
Goerli Testnet
*/
//address LoyaltyClub.sol 
export var goesell = "0xe12FA7FE9a38AA31ffaf31500Ad41FA3227FB764";
export var goerpc = "https://eth-goerli.g.alchemy.com/v2/";


/*
Zora Mainnet
*/
export var zoramainnetsell = "YOUR CONTRACT ADDRESS";
export var zoramainrpc = "https://rpc.zora.energy";

/*
Zora Goerli
*/
export var zorasell = "0xCEc50932e02dA5D179A1cA0704107CD12b3C7fEC";
export var zorarpc = "https://testnet.rpc.zora.energy/";

/*
Base Mainnet
*/
export var basemainnetsell = "YOUR CONTRACT ADDRESS";
export var basemainrpc = "https://mainnet.base.org";

/*
Base Goerli
*/
export var basesell = "0x212DE749d16419C2eBc337C11C29dcb323A364A5";
export var baserpc = "https://goerli.base.org";



/*
Optimism"
*/
export var optimainnetsell = "YOUR CONTRACT ADDRESS";
export var optmainirpc = "https://endpoints.omniatech.io/v1/op/mainnet/public";

/*
Optimism Goerli"
*/
export var optisell = "0xCEc50932e02dA5D179A1cA0704107CD12b3C7fEC";
export var optirpc = "https://opt-goerli.g.alchemy.com/v2/";

/*
Ethereum
*/
export var ethmainnetsell = "YOUR CONTRACT ADDRESS";
export var ethrpc = "https://mainnet.infura.io/v3/";
