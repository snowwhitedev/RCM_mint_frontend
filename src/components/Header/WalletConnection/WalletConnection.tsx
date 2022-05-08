import React, { useMemo } from 'react'

import Davatar from '@davatar/react'
import { UnsupportedChainIdError } from '@web3-react/core'
import { isMobile, isTablet } from 'react-device-detect'

import Modal from 'components/Modal/ModalWrapper'
import { SUPPORTED_WALLETS } from 'config/constants/wallet'
import { useActiveWeb3React, useModal } from 'hooks'
import { ImageContainer, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'
import { shortenAddress } from 'utils/web3Helpers'

import { useReverseENSLookUp } from '../hook'

import NetworkIndicator from './NetworkIndicator'

import { WalletConnectionModal } from '.'

const WalletConnection: React.FC = () => {
  const { account, connector, error } = useActiveWeb3React()
  const { isOpen, handleOpenModal } = useModal()

  const ens = useReverseENSLookUp()

  const iconUrl = useMemo(
    () =>
      Object.keys(SUPPORTED_WALLETS)
        .filter((wallet) => SUPPORTED_WALLETS[wallet].connector === connector)
        .map((k) => SUPPORTED_WALLETS[k].iconURL)[0],
    [connector]
  )

  return (
    <>
      <MainButton height={'40px'} padding={'0 24px'} onClick={() => handleOpenModal()}>
        {account ? (
          <>
            <NetworkIndicator />
            <Davatar size={isMobile || isTablet ? 12 : 16} address={account} />
            <TextWrapper fontWeight={'bold'}>&nbsp;{ens ?? shortenAddress(account)}</TextWrapper>
            {!isMobile && !isTablet && (
              <ImageContainer src={iconUrl} width={'24px'} borderRadius={themeBorderRadius.none} margin={'0 0 0 12px'} />
            )}
          </>
        ) : error ? (
          <TextWrapper>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}</TextWrapper>
        ) : (
          <TextWrapper>{'Connect a wallet'}</TextWrapper>
        )}
      </MainButton>
      <Modal isOpen={isOpen} handleOpenModal={handleOpenModal} width={isTablet ? '60%' : isMobile ? '90%' : '30%'}>
        <WalletConnectionModal />
      </Modal>
    </>
  )
}

export default WalletConnection
