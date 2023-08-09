import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import "../styles/globals.css";


interface CartItem {
    name: string;
    price: number;
  }
  export default function PayOrder () {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [orderCount, setOrderCount] = useState<number>(0);
  
    // Function to handle adding an item to the cart
    const addToCart = (menuItem: CartItem) => {
      setCartItems((prevCartItems) => [...prevCartItems, menuItem]);
      setOrderCount((prevOrderCount) => prevOrderCount + 1);
    };
  
    // Function to calculate the total price
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };
  
    // Function to handle the "Pay" button click
    const handlePay = async () => {
      const totalPrice = calculateTotalPrice();
  
      // Get the wagmi instance from the ConnectButton component
      const wagmi = await getWagmiInstance();
  
      if (!wagmi) {
        alert("Please connect your wallet to proceed with the payment.");
        return;
      }
  
      // Assuming you have a recipient address to send the payment
      const recipientAddress = "0xb03dac140432c09de320f3fdf8df5f2b75ab9230";
      // Call the transfer function to make the payment
      await wagmi.transfer({
        recipient: recipientAddress,
        amount: totalPrice,
      });
  
      alert("Payment successful! Total amount: $" + totalPrice);
      // Reset the cart and order count after successful payment
      setCartItems([]);
      setOrderCount(0);
    };
  
    // Function to get the wagmi instance from the ConnectButton component
    const getWagmiInstance = async () => {
      const connectButtonElement = document.getElementById("connect-button");
      if (connectButtonElement) {
        const { walletProvider } = connectButtonElement as any;
        if (walletProvider) {
          return await walletProvider.getWagmi();
        }
      }
      return null;
    };
    return (
        <>
<div className={styles.box_card}>
<div className={styles.title_block}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>
    My order{" "}
  </h1>
</div>
<h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>
  Total Order Count: {orderCount}
</h1>
<ul>
  {cartItems.map((item, index) => (
    <li key={index}>{item.name}</li>
  ))}
</ul>
<div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>
    Total Price: ${calculateTotalPrice()}{" "}
  </h1>
</div>
</div>
&nbsp;
<button
  className="glow-on-hover-pay"
  type="button"
  onClick={handlePay}
>
  Pay
</button>
</>
);
 
}

