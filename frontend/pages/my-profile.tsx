import styles from "../styles/Home.module.css";
import React, { useState } from 'react';
import Membership from "./membership_level"
import Myid from "./my_id"
import Behavior from "./behavior";
import TransactionHistory from "./transaction_history";
import OrderHistory from "./order_history";
import Header from "./header"
import  ConnectButton  from "../components/instructionsComponent/navigation/navbar/index"
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Footer from "../components/instructionsComponent/navigation/footer/index"
import "../styles/globals.css";





const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: "demo",

    // Required
    appName: "Worldcoin loyalty program",

  })
);



export default function Profile() {
   

    return (
        <>
        <Header />
        <div>
        &nbsp;
        <WagmiConfig config={config}>
        <ConnectKitProvider mode="dark">
   
    </ConnectKitProvider>
      </WagmiConfig>
      </div>
    <div className={styles.box_acc}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}></div>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>My Profile</h1>
    &nbsp;
    
    <div className={styles.box_id_behavior}>
    <Myid />
    <Behavior />
    </div>
    &nbsp;
    <Membership />
    &nbsp;
    <div className={styles.image_member_level}>
    <TransactionHistory />
    <OrderHistory />
    </div>
    </div>
    &nbsp;
    &nbsp;
    
    <Footer /> 
    </>
    )
}