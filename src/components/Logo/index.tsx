import React from 'react'

import { isMobile, isTablet } from 'react-device-detect'
import styled from 'styled-components'

import COK_LOGO from 'assets/images/logox.png'
import COK_LOGO_SM from 'assets/images/main_logo.png'
import { useAppNavigate } from 'hooks'
import { ImageContainer } from 'styles/components'

const LogoWrapper = styled(ImageContainer)`
  z-index: 1;
`
const Logo: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  return (
    <LogoWrapper
      src={isMobile || isTablet ? COK_LOGO_SM : COK_LOGO}
      borderRadius={'0'}
      height={isMobile || isTablet ? '42px' : '80px'}
      alt="Count of Kingz Logo"
      onClick={() => {
        handleNavigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    />
  )
}

export default Logo
