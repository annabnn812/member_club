import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MenuBar } from "./MenuBar"
import MenuItem from "../components/MenuItemBar";
import Header from "./header";
import Footer from "../components/instructionsComponent/navigation/footer/index";
import "../styles/globals.css";
import "sf-font";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  goesell,
  hhsell,
  zoramainnetsell,
  zorasell,
  basemainnetsell,
  basesell,
  optimainnetsell,
  optisell,
} from "../ABI/configuration";
import { goerliChain, hardChain, ethChain, basetestChain, optimismtestChain, zoratestChain, baseChain, optimismChain, zoraChain } from "../ABI/chainchange";
import LoyaltyClub from "../../fronted/artifacts/contracts/LoyaltyClub.sol/LoyaltyClub.json"




interface CartItem {
  name: string;
  price: number;
}

export default function Menubar() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  const [chainName, setChainName] = useState<string>("");
  const [rpc, setRpc] = useState<string>("");
  const [sell, setSell] = useState<string>("");
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    const fetchData = async () => {
      await getChain();
      await fetchRpcUrl();
      await connectWallet();
    };
  
    fetchData();
  }, [setUser]);

  const router = useRouter();
  

  async function fetchRpcUrl() {
    var hh = "0x7a69";
    var goe = "0x5";
    var opti = "0xa";
    var base = "00x2105";
    var zora = "0x76adf1";
    var optitest = "0x1a4";
    var basetest = "0x14a33";
    var zoratest = "999";
    var hhrpc = "http://localhost:8545";
    var optmainirpc = "https://endpoints.omniatech.io/v1/op/mainnet/public";
    var optirpc = "https://opt-goerli.g.alchemy.com/v2/";
    var basemainrpc = "https://mainnet.base.org";
    var baserpc = "https://goerli.base.org";
    var zoramainrpc = "https://rpc.zora.energy";
    var zorarpc = "https://testnet.rpc.zora.energy/";
    var goerpc = "https://eth-goerli.g.alchemy.com/v2/";
  
    const connected = await detectEthereumProvider();
    const ethereum = (window as any).ethereum;
    const chainId = await ethereum.request({ method: 'net_version' });
  
  
    if (connected) {
        if (chainId === hh) {
            setRpc(hhrpc);
          } else if (chainId === goe) {
            setRpc(goerpc);
          } else if (chainId === opti) {
            setRpc(optmainirpc);
          } else if (chainId === optitest) {
            setRpc(optirpc);
          } else if (chainId === base) {
            setRpc(basemainrpc);
          } else if (chainId === basetest) {
            setRpc(baserpc);
          } else if (chainId === zoratest) {
            setRpc(zoramainrpc);
          } else if (chainId === zora) {
            setRpc(zorarpc);
          } else {
            // Handle the case when none of the if-else conditions are met
            setRpc("default-value"); // Replace 'default-value' with the actual default URL you want to set.
          }
        } else {
          // Handle the case when the wallet is not connected
          setRpc("default-value"); // Replace 'default-value' with the actual default URL you want to set.
        }
      }
  
    console.log(setRpc);
  


  async function getChain() {
    var hh = "0x7a69";
    var goe = "0x5";
    var opti = "0xa";
    var base = "00x2105";
    var zora = "0x76adf1";
    var optitest = "0x1a4";
    var basetest = "0x14a33";
    var zoratest = "999";

    const connected = await detectEthereumProvider();
    const ethereum = (window as any).ethereum;
    const chainId = await ethereum.request({ method: 'net_version' });

    if (connected) {
      if (chainId === hh) {
        setChainName("HardHat");
      } else if (chainId === goe) {
        setChainName("Goerli Testnet");
      } else if (chainId === opti) {
        setChainName("Optimism");
      } else if (chainId === optitest) {
        setChainName("Optimism Goerli Testnet");
      } else if (chainId === base) {
        setChainName("Base");
      } else if (chainId === basetest) {
        setChainName("Base Goerli Testnet");
      } else if (chainId === zoratest) {
        setChainName("Zora Goerli");
      } else if (chainId === zora) {
        setChainName("Zora");
      } else {
        setChainName("Unknown Chain"); // Set a default chain name when none of the conditions match
      }
      console.log(chainName);
    }
  }

  getChain(); // Call the function here to get the chain name



    async function connectUser() {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        console.log(signer);
      
        let account = ''; // Initialize account with an empty string
      
        if (window.ethereum) {
          var web3 = new Web3(window.ethereum);
          await window.ethereum.send('eth_requestAccounts');
          var accounts = await web3.eth.getAccounts();
          account = accounts[0]; // Update account value within the conditional block
        }
      
        // Check if the account is available before calling getUser
        if (account) {
          getUser(account);
        } else {
          // Handle the case when the account is not available
          console.log('No account available.');
          // You can show an error message or take appropriate action here
        }
      }
      
      function getUser(account: string) {
        console.log('User account:', account);
         setUser(account);
      }
    
     

      async function updateSellValue() {
        var hh = "0x7a69";
        var goe = "0x5";
        var opti = "0xa";
        var base = "00x2105";
        var zora = "0x76adf1";
        var optitest = "0x1a4";
        var basetest = "0x14a33";
        var zoratest = "999";
      
        const connected = await detectEthereumProvider();
        const ethereum = (window as any).ethereum;
        const chainId = await ethereum.request({ method: 'net_version' });
      
        let sellValue = ""; // Declare the sellValue variable with a default value
      
        if (connected) {
          if (chainId === hh) {
            sellValue = hhsell;
          } else if (chainId === goe) {
            sellValue = goesell;
          } else if (chainId === opti) {
            sellValue = optimainnetsell;
          } else if (chainId === optitest) {
            sellValue = optisell;
          } else if (chainId === base) {
            sellValue = basemainnetsell;
          } else if (chainId === basetest) {
            sellValue = basesell;
          } else if (chainId === zoratest) {
            sellValue = zoramainnetsell;
          } else if (chainId === zora) {
            sellValue = zorasell;
          } else {
            // Handle the case when none of the if-else conditions are met
            sellValue = "default-value"; // Replace 'default-value' with the actual default value you want to set.
          }
        } else {
          // Handle the case when the wallet is not connected
          sellValue = "default-value"; // Replace 'default-value' with the actual default value you want to set.
        }
      
        setSell(sellValue);
        console.log(sellValue);
      }
      
      // Call the updateSellValue function
      updateSellValue();



    async function connectWallet() {
        await connectUser();
        await fetchRpcUrl();
        await getChain();
      }

    


  // Function to handle adding an item to the cart
  const addToCart = (menuItem: CartItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, menuItem]);
    setOrderCount((prevOrderCount) => prevOrderCount + 1);
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Function to handle the "Pay" button click
  const handlePay = async () => {
    const totalPrice = calculateTotalPrice();

    // Check if the wallet is connected
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    if (!connection) {
      alert("Please connect your wallet to proceed with the payment.");
      return;
    }

    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    
    const contractAddress = "0x212DE749d16419C2eBc337C11C29dcb323A364A5"; 
    const contract = new ethers.Contract(contractAddress, LoyaltyClub.abi, signer);

    try {
      // Call the contract's 'pay' function to make the payment
      // Make sure to replace 'totalPrice' with the actual total price to be paid
      const transaction = await contract.pay(totalPrice, { value: totalPrice });
  
      // Wait for the transaction to be mined
      await transaction.wait();
  
      // After the payment is made, you can call the 'releasePayment' function to transfer the payment to the seller
      const releaseTransaction = await contract.releasePayment();
      await releaseTransaction.wait();
  
      alert("Payment successful! Total amount: $" + totalPrice);
      // Reset the cart and order count after successful payment
      setCartItems([]);
      setOrderCount(0);
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    }

  
  };
  return (
    <>
    <Header />
    <div>
      &nbsp;
      
    </div>

     
  
      <div className={styles.box_acc}>
        <div className="menu">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60%",
            }}
          ></div>
          <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>
            Bar Menu
          </h1>
          <div className="menuList">
            {MenuBar.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  price={menuItem.price}
                  onAddToCart={() => addToCart(menuItem)}
                />
              );
            })}
          </div>
        </div>
        &nbsp;
        &nbsp;
        <div className={styles.box_card}>
          <div className={styles.title_block}>
            <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 20 }}>
              My order{" "}
            </h1>
          </div>
          <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>
            Total Order Count: {orderCount}
          </h1>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <div className={styles.line}>
            <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 14 }}>
              Total Price: ${calculateTotalPrice()}{" "}
            </h1>
          </div>
          </div>
          &nbsp;
          <button
            className="glow-on-hover-pay"
            type="button"
            onClick={handlePay}
          >
            Pay
          </button>
        </div>
        &nbsp;
        &nbsp;
        <Footer />
      
   
    </>
    
  );
  }