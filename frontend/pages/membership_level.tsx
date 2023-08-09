import styles from "../styles/Home.module.css";
import Image from "next/image"
import React, { useState } from 'react';
import RangeSlider from "../components/RangeSlider"
import 'ion-rangeslider/css/ion.rangeSlider.min.scss';


export default function Membership() {
   

    return (
        <>
    <div className={styles.box_member_level}>
    
    <div className="container">
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>My membership level is : </h1>
  &nbsp;
  <div>
      <RangeSlider />
      &nbsp;
     
    </div>
    <div>
    <div className={styles.image_member_level}>
      
      <Image
            src="/Bronze.png"
            alt=""
            
            width={100}
            height={100}
            />
            <Image
            src="/Silver.png"
            alt=""
            
            width={100}
            height={100}
            />
            <Image
            src="/Gold.png"
            alt=""
           
            width={100}
            height={100}
            />
            <Image
            src="/Platinum.png"
            alt=""
           
            width={100}
            height={100}
            />
          </div>
          </div>
          </div>
  </div>
  
 
    </>
    )
}