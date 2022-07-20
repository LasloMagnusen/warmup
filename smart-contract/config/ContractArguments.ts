import { utils } from 'ethers';
import CollectionConfig from './CollectionConfig';

// Update the following array if you change the constructor arguments...
const ContractArguments = [
  CollectionConfig.tokenName,
  CollectionConfig.tokenSymbol,
  utils.parseEther(CollectionConfig.whitelistSale.costNotFree.toString()),
  CollectionConfig.maxSupply,
  CollectionConfig.whitelistSale.maxMintAmountPerTx,
  CollectionConfig.cost,
  CollectionConfig.whitelistSale.maxMintAmountPerWalletFree,
  CollectionConfig.hiddenMetadataUri,
] as const;

export default ContractArguments;