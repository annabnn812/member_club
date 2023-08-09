import styles from "../styles/Home.module.css";
import Image from "next/image"
import React, { useState } from 'react';





export default function OrderHistory() {

    return (
        <>
   
 
  <div className={styles.box_member_history}>
   <div className={styles.title_block}>
   
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>My order history is as follows: </h1>
  </div>

  <div className={styles.box_transaction_history}>

  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Jul-26-2023 01:16:29 AM +UTC </h1>
  </div>

  <div className={styles.line}>
    <p>Entrance ticket</p>
    <p>= 2 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$25 </h1>
  </div>


  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Total : $50 </h1>
  </div>
  </div>


  <div className={styles.box_transaction_history}>

  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Jul-20-2023 01:16:19 AM +UTC </h1>
  </div>

  <div className={styles.line}>
    <p>Truffle Gnocchi</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$29 </h1>
  </div>

  <div className={styles.line}>
    <p>New Zealand Baby Lamb Chops</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$40 </h1>
  </div>


  <div className={styles.line}>
    <p>Kale Caesar Salad</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$19 </h1>
  </div>


  <div className={styles.line}>
    <p>Petite Sirah , Spellbound, CA 20</p>
    <p>= 1 = </p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$70 </h1>
  </div>



  <div className={styles.line}>
    <p>NY Cheesecake</p>
    <p>= 2 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$12 </h1>
  </div>

  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Total : $182 </h1>
  </div>
  </div>



  <div className={styles.box_transaction_history}>

  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Jul-19-2023 11:36:11 PM +UTC </h1>
  </div>

  <div className={styles.line}>
    <p>Entrance ticket</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$25 </h1>
  </div>


  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Total : $25 </h1>
  </div>
  </div>


  <div className={styles.box_transaction_history}>

  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Jul-05-2023 10:06:13 PM +UTC </h1>
  </div>

  <div className={styles.line}>
    <p>Truffle Gnocchi</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$29 </h1>
  </div>

  <div className={styles.line}>
    <p>New Zealand Baby Lamb Chops</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$40 </h1>
  </div>


  <div className={styles.line}>
    <p>Kale Caesar Salad</p>
    <p>= 1 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$19 </h1>
  </div>


  <div className={styles.line}>
    <p>Petite Sirah , Spellbound, CA 20</p>
    <p>= 1 = </p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$70 </h1>
  </div>

  <div className={styles.line}>
    <p>Petite Sirah , Spellbound, CA 20</p>
    <p>= 1 = </p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$70 </h1>
  </div>

  <div className={styles.line}>
    <p>NY Cheesecake</p>
    <p>= 2 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$12 </h1>
  </div>

  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Total : $240 </h1>
  </div>
  </div>
  
  <div className={styles.box_transaction_history}>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Jun-02-2023 09:16:29 PM +UTC </h1>
  </div>
  

  <div className={styles.line}>
    <p>Entrance ticket</p>
    <p>= 2 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$25 </h1>
  </div>


  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Total : $50 </h1>
  </div>
  </div>


  <div className={styles.box_transaction_history}>
  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Jun-02-2023 09:16:29 PM +UTC </h1>
  </div>
  

  <div className={styles.line}>
    <p>Entrance ticket</p>
    <p>= 2 =</p>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>$25 </h1>
  </div>


  <div className={styles.line}>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}> Total : $50 </h1>
  </div>
  </div>

  </div>
  
    
  
    </>
    )
}