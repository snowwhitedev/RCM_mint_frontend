import { RCM_PUNK_CONTRACT_ADDRESSES } from 'config/constants'

export const getRCMPunksAddress = (chainId: number) => {
  return RCM_PUNK_CONTRACT_ADDRESSES[chainId]
}
