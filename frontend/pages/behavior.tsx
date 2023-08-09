import styles from "../styles/Home.module.css";
import Image from "next/image"
import React, { useState } from 'react';





export default function Behavior() {

    return (
        <>
   <div className={styles.image_member_behavior}>
    <div className="container">
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>My behavior is : </h1>
  </div>
  
      
      <Image
            src="/green.gif"
            alt=""
            width={30}
            height={30}
            />
            <Image
            src="/green.gif"
            alt=""
            width={30}
            height={30}
            />
            <Image
            src="/green.gif"
            alt=""
            width={30}
            height={30}
            />
          </div>
  
    </>
    )
}