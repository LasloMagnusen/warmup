import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TestDeploy',
  tokenName: 'Test Deploy Token',
  tokenSymbol: 'TDT',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10000,
  cost: 0,
  whitelistSale: {
    costNotFree: 0.01,
    maxMintAmountPerTx: 1,
    maxMintAmountPerWalletFree: 1
    
  },
  preSale: {
    costNotFree: 0.01,
    maxMintAmountPerTx: 2,
    maxMintAmountPerWalletFree: 1
  },
  publicSale: {
    costNotFree: 0.01,
    maxMintAmountPerTx: 5,
    maxMintAmountPerWalletFree: 2
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
