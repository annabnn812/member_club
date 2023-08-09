import styles from "../styles/Home.module.css";
import Image from "next/image"
import React, { useState } from 'react';
import RenderAppBlock from '../components/RenderAppBlock';





export default function TransactionHistory() {

    return (
        <>
   
   <div className={styles.box_member_history}>
   <div className={styles.title_block}>
   
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>My transaction history is as follows: </h1>
  </div>
<RenderAppBlock />
  <div className={styles.box_transaction_history}>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Hash: </h1> 
    </div>
  <div className={styles.line}>
    <p>0x28781b9133638a170dac7ead0e0941284af9ed01ee5a30f37a276fb5d7a62338</p>
    
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Status: </h1>
    <p>Success</p>
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Block Number: </h1>
    <p>107108506</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Timestamp: </h1>
  <p>Jul-26-2023 01:16:29 AM +UTC</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Value: </h1>
  <p>0.026548 ETH ($50.00)</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Fee: </h1>
  <p>0.000030692436931989 ETH ($0.06)</p>
  </div>
  </div>

  <div className={styles.box_transaction_history}>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Hash: </h1> 
    </div>
  <div className={styles.line}>
    <p>0x7dac4e2538093e5d82f6d6661f8350cd7da175784a3be16013ca7a4e49c0778a</p>
    
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Status: </h1>
    <p>Success</p>
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Block Number: </h1>
    <p>107108501</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Timestamp: </h1>
  <p>Jul-20-2023 01:16:19 AM +UTC</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Value: </h1>
  <p>0.096520 ETH ($182)</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Fee: </h1>
  <p>0.000019203044854582 ETH ($0.04)</p>
  </div>
  </div>


  <div className={styles.box_transaction_history}>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Hash: </h1> 
    </div>
  <div className={styles.line}>
    <p>0x0fbdce22ed1982261f5767a14f0d63aecc08554200e57faf527635361322833c</p>
    
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Status: </h1>
    <p>Success</p>
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Block Number: </h1>
    <p>107108506</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Timestamp: </h1>
  <p>Jul-19-2023 11:36:11 PM +UTC</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Value: </h1>
  <p>0.13742 ETH ($25.00)</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Fee: </h1>
  <p>0.000030692436931989 ETH ($0.06)</p>
  </div>
  </div>


  <div className={styles.box_transaction_history}>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Hash: </h1> 
    </div>
  <div className={styles.line}>
    <p>0x2413a25bd0dd83d2c75e0cb69c248bb3779a619b185ddce0c584ca3a8f8cb69a</p>
    
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Status: </h1>
    <p>Success</p>
  </div>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Block Number: </h1>
    <p>107108506</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Timestamp: </h1>
  <p>Jul-05-2023 10:06:13 PM +UTC</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Value: </h1>
  <p>0.14232 ETH ($240.00)</p>
  </div>
  <div className={styles.line}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>Transaction Fee: </h1>
  <p>0.000030692436931989 ETH ($0.06)</p>
 
  </div>
  </div>
  </div>

  
    
  
    </>
    )
}