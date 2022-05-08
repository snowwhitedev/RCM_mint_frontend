import ETHEREUM_ICON from 'assets/images/ethereum.svg'
import RCM_PUNKS_ABI from 'config/abis/rcmPunks.json'

export enum SupportedChainId {
  MAIN = 1,
  RINKEBY_TESTNET = 4,
}

export const NETWORK_INDICATOR: { [chainId: number]: { name: 'Ethereum' | 'Rinkeby'; icon: string } } = {
  [SupportedChainId.MAIN]: { name: 'Ethereum', icon: ETHEREUM_ICON },
  [SupportedChainId.RINKEBY_TESTNET]: { name: 'Rinkeby', icon: ETHEREUM_ICON },
}

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  WalletLink = 'walletlink',
}

export const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.MAIN, SupportedChainId.RINKEBY_TESTNET]

type AddressMap = { [chainId: number]: string }

export const RCM_PUNK_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: '0x9712411BcDCa9d25637CBa8111f74a00a14824fE',
  [SupportedChainId.RINKEBY_TESTNET]: '0x9712411BcDCa9d25637CBa8111f74a00a14824fE',
}

export const CONTRACT_ABIS = {
  RCM_PUNKS: RCM_PUNKS_ABI,
}

const ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY
const ALCHEMY_KEY_RINKEBY = process.env.REACT_APP_ALCHEMY_KEY_RINKEBY

export const NETWORK_URLS: {
  [chainId in number]: string
} = {
  [SupportedChainId.MAIN]: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.RINKEBY_TESTNET]: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY_RINKEBY}`,
}

export const POLLING_INTERVAL = 30000
export const GAS_PRICE_POLLING_INTERVAL = 60000
export const connectorLocalStorageKey = 'connectorId'
export const walletLocalStorageKey = 'wallet'
