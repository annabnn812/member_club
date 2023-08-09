import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css"
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
//import Sale from './ABI/Sale.json';
import Web3 from 'web3';

import Connectchain from "../ABI/connectchain";


const Header: React.FC = () => {
  const categories = [
    "Restaurant",
    "Order",
    "Reserve",
    "Events",
    "Contact",
    "Program Partners",
    "My Profile",
  ];

  return (
    <header className={styles.header}>
       
      <nav>
        <ul className={styles.menu}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link href={`/${category.toLowerCase().replace(" ", "-")}`}>
                {category}
              </Link>
             
            </li>
            
          ))}
          <Connectchain />
          </ul>
        
      </nav>
    </header>
  );
};

export default Header;