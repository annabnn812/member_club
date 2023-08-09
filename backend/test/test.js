const { expect } = require("chai");

describe("LoyaltyClub Contract", function () {
  let LoyaltyClub;
  let loyaltyClub;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get the contract factory and deploy a new instance for each test case
    LoyaltyClub = await ethers.getContractFactory("LoyaltyClub");
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy the contract with seller address and amount as constructor arguments
    const seller = owner.address;
    const amount = ethers.utils.parseEther("1"); // 1 Ether in Wei
    loyaltyClub = await LoyaltyClub.deploy(seller, amount);
    await loyaltyClub.deployed();
  });

  // ... (other test cases remain the same)

  it("Should release the payment to the seller after payment is made", async function () {
    // Pay the amount from addr1
    await loyaltyClub.connect(addr1).pay({ value: ethers.utils.parseEther("1") });

    // Get the seller's initial balance
    const initialBalance = await ethers.provider.getBalance(owner.address);

    // Release payment by the buyer
    await loyaltyClub.connect(addr1).releasePayment();

    // Get the seller's balance after releasing payment
    const finalBalance = await ethers.provider.getBalance(owner.address);

    // Calculate the expected amount received by the seller (initial balance + 1 Ether)
    const expectedAmount = initialBalance.add(ethers.utils.parseEther("1"));

    // Check if the payment is released to the seller
    expect(finalBalance).to.equal(expectedAmount);
  });
});
