const hre = require("hardhat");

async function main() {
  const LoyaltyClub = await hre.ethers.getContractFactory("LoyaltyClub");
  const sellerAddress = "0xad96c0b51d5be8c190f2d7cdabbfd4173af2b06c"; 

  const loyaltyClub = await LoyaltyClub.deploy(sellerAddress);
  await loyaltyClub.deployed();

  console.log("LoyaltyClub deployed to:", loyaltyClub.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
