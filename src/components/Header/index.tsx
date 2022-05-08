import React from 'react'

import { isMobile } from 'react-device-detect'
import styled from 'styled-components'

import { BlurBackground, FlexColumn, FlexRow } from 'styles/components'
import { themeColor } from 'styles/theme'

import Logo from '../Logo'

import GasPriceContainer from './GasPriceContainer'
import Hamburger from './hamburgerIcon'
import Menu from './Menu'
import { WalletConnectionContainer } from './WalletConnection'

const HeaderContainer = styled(FlexRow)`
  z-index: 9;
  position: fixed;
  top: 0;
  height: 120px;
  padding: 0 6%;
  background-color: ${themeColor.background1};
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <FlexColumn colWidth={'fit-content'}>
        <FlexRow justifyContent={'flex-start'} gap={'24px'}>
          {/* <Logo /> */}
        </FlexRow>
      </FlexColumn>
      <FlexColumn colWidth={'fit-content'}>
        <FlexRow justifyContent={'flex-end'}>
          <Menu />
          <GasPriceContainer />
          <WalletConnectionContainer />
          <Hamburger />
        </FlexRow>
      </FlexColumn>
      <BlurBackground direction={'top'} />
    </HeaderContainer>
  )
}

export default Header
