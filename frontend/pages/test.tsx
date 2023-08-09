import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MenuList } from "./MenuList";
import MenuItem from "../components/MenuItem";
import Header from "./header";
import { createConfig, WagmiConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Footer from "../components/instructionsComponent/navigation/footer/index";
import "../styles/globals.css";
import "sf-font";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { Card, Button, Input, Col, Row, Spacer, Container, Text } from "@nextui-org/react";
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
import { cipherEth, simpleCrypto } from "../ABI/configuration";
import ContractSell from "../../fronted/artifacts/contracts/LoyaltyClub.sol/LoyaltyClub.json";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
    walletConnectProjectId: "demo",

    // Required
    appName: "Worldcoin loyalty program",
  })
);

interface CartItem {
  name: string;
  price: number;
}

export default function Menu() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [user, setUser] = useState<string>("");
  const [chainName, setChainName] = useState<string>("");
  const [rpc, setRpc] = useState<string>("");
  const [sell, getSell] = useState([])
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    getChain();
    fetchRpcUrl();
    connectWallet();
   
  }, []);

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
    const chainId = await ethereum.request({ method: 'eth_chainId' });
  
  
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
    const chainId = await ethereum.request({ method: 'eth_chainId' });

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
    
     

  async function setSell() {
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
  const chainId = await ethereum.request({ method: 'eth_chainId' });
  
  let sell = ""; // Declare the sell variable with a default value

  if (connected) {
    if (chainId === hh) {
      sell = hhsell;
    } else if (chainId === goe) {
      sell = goesell;
    } else if (chainId === opti) {
      sell = optimainnetsell;
    } else if (chainId === optitest) {
      sell = optisell;
    } else if (chainId === base) {
      sell = basemainnetsell;
    } else if (chainId === basetest) {
      sell = basesell;
    } else if (chainId === zoratest) {
      sell = zoramainnetsell;
    } else if (chainId === zora) {
      sell = zorasell;
    } else {
      // Handle the case when none of the if-else conditions are met
      sell = "default-value"; // Replace 'default-value' with the actual default value you want to set.
    }
  } else {
    // Handle the case when the wallet is not connected
    sell = "default-value"; // Replace 'default-value' with the actual default value you want to set.
  }
  

  console.log(sell);
}

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

    // Get the wagmi instance from the ConnectButton component
    const wagmi = await getWagmiInstance();

    if (!wagmi) {
      alert("Please connect your wallet to proceed with the payment.");
      return;
    }

    // Assuming you have a recipient address to send the payment
    const recipientAddress = "0xb03dac140432c09de320f3fdf8df5f2b75ab9230";
    // Call the transfer function to make the payment
    await wagmi.transfer({
      recipient: recipientAddress,
      amount: totalPrice,
    });

    alert("Payment successful! Total amount: $" + totalPrice);
    // Reset the cart and order count after successful payment
    setCartItems([]);
    setOrderCount(0);
  };

  // Function to get the wagmi instance from the ConnectButton component
  const getWagmiInstance = async () => {
    const connectButtonElement = document.getElementById("connect-button");
    if (connectButtonElement) {
      const { walletProvider } = connectButtonElement as any;
      if (walletProvider) {
        return await walletProvider.getWagmi();
      }
    }
    return null;
  };

  return (
    <>
    <Header />
    <div>
      &nbsp;
      <div>
    <Container md>  
    <Row>
        <Col css={{ size: "$50", paddingLeft: "$10", paddingTop: "$4" }}>
          <Card css={{ p: "$9", backgroundColor: "$blue200" }}>
          <Row>
          <Text h4 css={{marginRight:'$3'}}>
              Switch Blockchain
            </Text>
          <Button size="sm" onPress={ethChain} css={{ marginRight: "$2" }}>
                <img src="./ethereumlogo.png" width={"100px"} />
              </Button>
              <Button size="sm" onPress={baseChain} css={{ marginRight: "$2" }}>
                <img src="./base-logo.png" width={"100px"} />
              </Button>
              <Button size="sm" onPress={optimismChain}>
                <img src="'./optimism.png'" width={"100px"} />
              </Button>
              <Button size="sm" onPress={zoraChain}>
                <img src="./Zora-logo.png" width={"100px"} />
              </Button>
              <Button size="sm" onPress={zoratestChain}>
              <h3>Zora Testnet</h3>
              </Button>
              <Button size="sm" onPress={basetestChain}>
              <h3>Base Testnet</h3>
              </Button>
              <Button size="sm" onPress={optimismtestChain}>
              <h3>Optimism Testnet</h3>
              </Button>
              <Button size="sm" onPress={goerliChain}>
              <h3>Goerli Testnet</h3>
              </Button>
              <Button size="sm" onPress={hardChain}>
              <h3>HardHat Testnet</h3>
              </Button>
              </Row>
              <Card css={{ p: "$4", marginTop:'$3'}}>
            <Text h3>
              Wallet
              <Text h5 css={{ color: "#39FF14" }}>
                {user}
              </Text>
            </Text>
            <Text h6>Selected Chain: {chainName}</Text>
            <Row>
            <Button
                size="sm"
                color="gradient"
                onPress={connectWallet}
                style={{ fontSize: "20px", marginRight:'4px' }}
              >
               Connect
              </Button>
              
            </Row>
            </Card>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
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
            Pizza Menu
          </h1>
          <div className="menuList">
            {MenuList.map((menuItem, key) => {
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