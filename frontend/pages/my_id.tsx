import styles from "../styles/Home.module.css";
import Image from "next/image"
import React, { useState } from 'react';





export default function Myid() {

    return (
        <>
   
   <div className={styles.image_member_behavior}>
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>My ID is : </h1>
  <button className="form_id" >1234567899876543210</button>
  </div>
    
  
    </>
    )
}