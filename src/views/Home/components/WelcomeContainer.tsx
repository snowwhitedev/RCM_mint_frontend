import React, { useState } from 'react'

import { isMobile, isTablet } from 'react-device-detect'
import ClipLoader from 'react-spinners/ClipLoader'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow, InputWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'

import { useMint, useWhiteListMint } from '../hooks'

const WelcomeContainer: React.FC = () => {
  const { mintAmount, handleMint, handleOnChange } = useMint()
  const { isLoading, whiteListMintAmount, handleWhiteListMint, handleOnChangeWhiteListMint } = useWhiteListMint()

  return (
    <FlexColumn colHeight={isMobile || isTablet ? 'auto' : 'calc(100vh - 120px)'} padding={'6% 0 6% 6%'}>
      <FlexRow rowWidth="60%">
        <InputWrapper type={'number'} value={whiteListMintAmount} onChange={handleOnChangeWhiteListMint} />
        <MainButton onClick={handleWhiteListMint} disabled={isLoading}>
          {'Presell'} {isLoading === true && <ClipLoader color={themeColor.text1} size={'24px'} />}
        </MainButton>
      </FlexRow>
      <FlexRow rowWidth="60%">
        <InputWrapper type={'number'} value={mintAmount} onChange={handleOnChange} />
        <MainButton onClick={handleMint}>{'Mint'}</MainButton>
      </FlexRow>
      {/* {signature !== '' && <TextWrapper>{signature}</TextWrapper>} */}
    </FlexColumn>
  )
}

export default WelcomeContainer
