import React, { useState } from 'react'

import { utils } from 'ethers'
import { isMobile, isTablet } from 'react-device-detect'
import ClipLoader from 'react-spinners/ClipLoader'

import { FlexColumn, FlexRow, InputWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'

import { useMint, useWhiteListMint } from '../hooks'

const WelcomeContainer: React.FC = () => {
  const { mintAmount, totalMintAmount, publicMintPrice, handleMint, handleOnChange } = useMint()
  const { isLoading, whiteListMintAmount, whiteListMintPrice, handleWhiteListMint, handleOnChangeWhiteListMint } = useWhiteListMint()

  return (
    <FlexColumn colHeight={isMobile || isTablet ? 'auto' : 'calc(100vh - 120px)'} padding={'6% 0 6% 6%'}>
      <TextWrapper fontFamily={'title'} fontSize={'xxl'} fontWeight={'bold'}>{`Total Minted Amount: ${totalMintAmount}`}</TextWrapper>
      <FlexRow justifyContent={'center'}>
        <TextWrapper fontSize={'xl'} fontWeight={'bold'}>{`Price: ${
          whiteListMintPrice ? utils.formatEther(whiteListMintPrice) : '0'
        } ETH`}</TextWrapper>
        <InputWrapper type={'number'} value={whiteListMintAmount} onChange={handleOnChangeWhiteListMint} width={'60%'} />
        <MainButton onClick={handleWhiteListMint} disabled={isLoading}>
          {'Presell'} {isLoading === true && <ClipLoader color={themeColor.text1} size={'24px'} />}
        </MainButton>
      </FlexRow>
      <FlexRow justifyContent={'center'}>
        <TextWrapper fontSize={'xl'} fontWeight={'bold'}>{`Price: ${
          publicMintPrice ? utils.formatEther(publicMintPrice) : '0'
        } ETH`}</TextWrapper>
        <InputWrapper type={'number'} value={mintAmount} onChange={handleOnChange} width={'60%'} />
        <MainButton onClick={handleMint}>{'Mint'}</MainButton>
      </FlexRow>
      {/* {signature !== '' && <TextWrapper>{signature}</TextWrapper>} */}
    </FlexColumn>
  )
}

export default WelcomeContainer
