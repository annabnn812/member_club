
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router"; 
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


export default function ProgramPartner() {
  const router = useRouter(); 

 
  const handleGoToMenu = () => {
    router.push("/menu");
  };

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
        <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>Program Partners</h1>
        &nbsp;


        <div >
        <a href="https://ethglobal.com/events/superhack" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "65px", height: "65px" }}
          src="./ethglobal.jpg"
          alt="ethglobal-superhack"
        />
      </a>
        </div>
        &nbsp;

        <div >
        <a href="https://chain.link/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./chainlink.png"
          alt="Chainlink"
        />
      </a>
       
        &nbsp;
      
        <a href="https://www.optimism.io/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./optimism.jpeg"
          alt="Optimism"
        />
      </a>
      &nbsp;
      
      <a href="https://www.covalenthq.com/" target={"_blank"}>
      <img
        id="badge-button"
        style={{ width: "180px", height: "75px" }}
        src="./covalent.jpg"
        alt="Covalent"
      />
    </a>
        </div>
        &nbsp;
        <div >
        <a href="https://worldcoin.org/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./worldcoin.jpeg"
          alt="Worldcoin"
        />
      </a>
       
        &nbsp;
      
        <a href="https://thegraph.com/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./theGraph.jpg"
          alt="the Graph"
        />
      </a>
      &nbsp;
      
      <a href="https://attest.sh/" target={"_blank"}>
      <img
        id="badge-button"
        style={{ width: "180px", height: "75px" }}
        src="./EAS.png"
        alt="EAS"
      />
    </a>
        </div>
        &nbsp;
        <div >
        <a href="https://www.mode.network/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./mode.png"
          alt="Mode"
        />
      </a>
       
        &nbsp;
      
        <a href="https://zora.co/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./zora.png"
          alt="Zora"
        />
      </a>
      <a href="https://base.org/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./base.jpg"
          alt="Base"
        />
      </a>
        </div>
        &nbsp;
        <div >
        
        <a href="https://www.hyperlane.xyz/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./hyperlane.png"
          alt="Hyperlane"
        />
      </a>
      &nbsp;

      <a href="https://safe.global/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./safe.png"
          alt="Safe"
        />
      </a>
       
       
      &nbsp;
      
      <a href="https://layerzero.network/" target={"_blank"}>
      <img
        id="badge-button"
        style={{ width: "180px", height: "75px" }}
        src="./LayerZero.jpg"
        alt="Layer zero"
      />
    </a>
        </div>
      </div>
      &nbsp;
      &nbsp;
      
      <Footer /> 
    </>
  );
}
