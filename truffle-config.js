require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = process.env['PRIVATE_KEY'];
const infuraProjectId = process.env['INFURA_PROJECT_ID'];

module.exports = {
  compilers: {
    solc: {
      version: '^0.6.0',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: {
      network_id: 1,
      provider: () => new HDWalletProvider(privateKey, 'https://mainnet.infura.io/v3/' + infuraProjectId),
    },
    ropsten: {
      network_id: 3,
      provider: () => new HDWalletProvider(privateKey, 'https://ropsten.infura.io/v3/' + infuraProjectId),
    },
    rinkeby: {
      network_id: 4,
      provider: () => new HDWalletProvider(privateKey, 'https://rinkeby.infura.io/v3/' + infuraProjectId),
    },
    kovan: {
      network_id: 42,
      provider: () => new HDWalletProvider(privateKey, 'https://kovan.infura.io/v3/' + infuraProjectId),
    },
    goerli: {
      network_id: 5,
      provider: () => new HDWalletProvider(privateKey, 'https://goerli.infura.io/v3/' + infuraProjectId),
    },
  }
};
