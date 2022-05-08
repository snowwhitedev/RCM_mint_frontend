import React from 'react'

import { IoMdArrowUp } from 'react-icons/io'
import styled from 'styled-components'

import { MainButton } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'

const BtnWrapper = styled(MainButton)`
  position: fixed;
  bottom: 12px;
  right: 24px;
  z-index: 1;
`
const ScrollTopBtn: React.FC = () => {
  return (
    <BtnWrapper
      width={'50px'}
      height={'50px'}
      padding={'0px'}
      borderRadius={themeBorderRadius.circle}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <IoMdArrowUp size={30} />
    </BtnWrapper>
  )
}

export default ScrollTopBtn
