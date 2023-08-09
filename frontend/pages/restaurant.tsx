
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


export default function MenuCategories() {
  const router = useRouter(); 

 
  const handleGoToMenu = () => {
    router.push("/menu");
  };
  const handleGoToBar = () => {
    router.push("/bar");
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
        <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>Our menu</h1>
        &nbsp;

        <div >
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToBar}>Bar menu</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Bites</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Burgers and Sandwiches</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Pizza</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Lunch</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Dinner</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Dessert</button>
          </div>
          &nbsp;
          <div>
          <button className="glow-on-hover-menu" type="button" onClick={handleGoToMenu}>Happy hour</button>
          

        </div>
      </div>
      &nbsp;
      &nbsp;
      <Footer /> 
    </>
  );
}
