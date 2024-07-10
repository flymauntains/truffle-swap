require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const path = require("path");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 5,
      timeoutBlocks: 200000,
      skipDryRun: true
    }
  },


  
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,  // For Ethereum Mainnet/Ropsten/Rinkeby
    bscscan: process.env.BSCSCAN_API_KEY  // For BSC Mainnet/Testnet
  },
  // Add the following section for compilers
  compilers: {
    solc: {
      version: "0.5.16", // Default compiler version
      compilers: [
        {
          version: "0.8.13", // For contracts using ^0.8.13
        },
        {
          version: "0.6.6", // For contracts using =0.6.6
        },
        {
          version: "0.5.16", // For contracts using =0.5.16
        },
      ],
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  // Specify custom paths to your Solidity contracts
  contracts_directory: path.join(__dirname, "contracts"),
  contracts_build_directory: path.join(__dirname, "build/contracts"),

  // Specify compilers for individual contracts
  solc: {
    overrides: {
      "ConvertLib.sol": {
        version: "0.8.13",
      },
      "MetaCoin.sol": {
        version: "0.8.13",
      },
      "SherpaswapFactory.sol": {
        version: "0.5.16",
      },
      "SherpaswapRouter.sol": {
        version: "0.6.6",
      },
    },
  },
};
