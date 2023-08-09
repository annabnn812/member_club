import { useState, useEffect } from 'react';
import '../styles/Covalent_App.module.css';
import TokenAllocation from '../components/TokenAllocation';
import ChainSelector from '../components/ChainSelector';
import WalletSummary from '../components/WalletSummary';

function App() {
  const [chains, setChains] = useState()
  const [selectedChainId, setSelectedChainId] = useState(1)

  const walletAddress = '0xc5a93444Cc4dA6EfB9e6FC6e5D3CB55A53b52396'
  const walletActivityEndpoint = `https://api.covalenthq.com/v1/labs/activity/${walletAddress}/`
  const apiKey = process.env.REACT_APP_APIKEY

  const handleChainSelect = (chainId) => {
    setSelectedChainId(chainId)
  }

  useEffect(() => {
    fetch(walletActivityEndpoint, {method: 'GET', headers: {
      "Authorization": `Basic ${btoa(apiKey + ':')}`
    }})
      .then(res => res.json())
      .then(res => {
        const excludeTestnet = res.data.items.filter(item => item.is_testnet === false)
        setChains(excludeTestnet)
      })
  }, [walletActivityEndpoint, apiKey])

  

  if (chains) {
    return (
      <>
        <div className='container'>
          <WalletSummary walletAddress={walletAddress} chainId={selectedChainId} chains={chains}/>
          <ChainSelector chains={chains} handleChainSelect={handleChainSelect}/>
          <TokenAllocation selectedChainId={selectedChainId} walletAddress={walletAddress}/>
        </div>
      </>
    );
  }
}

export default App;
