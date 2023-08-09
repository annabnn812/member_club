import styles from "../styles/Home.module.css";
import Image from "next/image"
import "../styles/globals.css";


export default function Presentation() {
    return (
        <>
    <div className={styles.box_acc}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}></div>
    <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>Entrance</h1>
    </div>
  
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>ID = 1234567890 </h1>

  <div className={styles.box_acc}>
  <div className="container">
  <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>Membership level is : </h1>
      <div className="image-gallery">
   
      <Image
            src="/level.png"
            alt=""
            className="absolute inset-0" 
            width={650}
            height={150}
            />
          </div>
          </div>
          </div>
          

          <div className={styles.box_pic}>
          <Image
            src="/swipe_up.gif"
            alt=""
            className="absolute inset-10" 
            width={120}
            height={70}
            />
       </div>
   
       
       <div className={styles.box_acc}>
       <div className="container"> 
      <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>Customer behavior is :   </h1>
      <div className="image-gallery">
      <Image
            src="/behavior.png"
            alt=""
            className="absolute inset-0" 
            width={600}
            height={200}
            />
          </div>
          <Image
            src="/swipe_up.gif"
            alt=""
            className="absolute inset-0" 
            width={120}
            height={70}
            />
          
      </div>
      </div>
      
       
      </>
    )
  }