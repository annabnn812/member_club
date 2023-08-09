require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString().trim()



module.exports = {
	solidity: {
		version: "0.8.0",
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	
	allowUnlimitedContractSize: true,
	networks: {
		hardhat: {},
		GOERLI: {
			accounts: [privateKey],
			url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_OPT_GOE}`,
			gasPrice: 1000000000,
		},
		OPT_MAINNET: {
			accounts: [privateKey],
			url: `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_OPT_M}`,
			gasPrice: 1000000000,
		},
		OPT_GOERLI: {
			accounts: [privateKey],
			url: `https://opt-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_OPT_T}`,
			gasPrice: 1000000000,
		},
		base_mainnet: {
			url: 'https://mainnet.base.org',
			accounts: [privateKey],
			gasPrice: 1000000000,
		  },
		
		  base_goerli: {
			url: 'https://goerli.base.org',
			accounts: [privateKey],
			gasPrice: 1000000000,
		  },
	  zora_goerli: {
      	url: 'https://testnet.rpc.zora.energy/',
     	 accounts: [privateKey],
	 	 gasPrice: 1000000000,
    },
    
      zora_mainnet: {
      	url: 'https://mainnet.rpc.zora.energy/',
      	accounts: [privateKey],
	 	gasPrice: 1000000000,
    },
		  
	},
	COVALENT: {
		apiKey: `${process.env.COVALENT_API_KEY}`
	},
	paths: {
		artifacts: '../fronted/artifacts'
	}
}