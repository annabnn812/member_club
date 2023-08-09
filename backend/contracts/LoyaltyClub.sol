// SPDX-License-Identifier: MIT

//Goerli Testnet 
// ETH / USD 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e

// Optimism Mainnet
// ETH / USD 0xb7B9A39CC63f856b90B364911CC324dC46aC1770

//Optimism Goerli 
// ETH / USD 0x57241A37733983F97C4Ab06448F244A1E0Ca0ba8

//BASE Goerli testnet
// ETH / USD 0xcD2A119bD1F7DF95d706DE6F2057fDD45A0503E2

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LoyaltyClub {
    using SafeMath for uint256;

    address public seller;
    uint256 public amount;
    address public buyer;
    bool public isPaid;
    AggregatorV3Interface internal dataFeed;

    constructor(address _seller) {
        seller = _seller;
        dataFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);
    }

    function pay(uint256 _amount) public payable {
        require(msg.value == _amount, "Payment amount should be equal to the total amount");
        amount = _amount;
        buyer = msg.sender;
        isPaid = true;
    }

   function releasePayment() public {
    require(isPaid, "Payment has not been made yet");
    (, int256 price, , , ) = dataFeed.latestRoundData();
    require(price > 0, "Invalid price"); // Ensure the price is valid and greater than zero

    // Convert USD amount to ETH using the latest ETH/USD price
    uint256 totalAmount = amount * uint256(price) / 1e8; // Divide by 1e8 to adjust decimals

    require(address(this).balance >= totalAmount, "Insufficient contract balance");

    // Transfer the amount to the seller
    payable(seller).transfer(totalAmount);
}

    function getPrice() public view returns (uint256) {
        (, int256 price, , , ) = dataFeed.latestRoundData();
        require(price > 0, "Invalid price"); // Ensure the price is valid and greater than zero
        return uint256(price);
    }

    function calculateTotalAmount() public view returns (uint256) {
        return amount.mul(getPrice());
    }

    function checkIfPaid() public view returns (bool) {
        return isPaid;
    }
}