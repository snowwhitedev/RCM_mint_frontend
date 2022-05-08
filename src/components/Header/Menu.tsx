import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useAppNavigate, useGetCurrentURLPath } from 'hooks'
import { FlexRow, HoverTextWrapper } from 'styles/components'
import { themeBreakPoint, themeFontWeight } from 'styles/theme'

export const MenuWrapper = styled(FlexRow)`
  display: none;

  @media ${themeBreakPoint.md} {
    display: flex;
  }
`
export const MenuItem = styled(NavLink)<{ color?: string; isDisabled?: boolean }>`
  color: ${({ theme, color }) => (color ? color : theme.text1)};
  font-weight: ${themeFontWeight.regular};
  text-decoration: none;
  padding: 0 12px;
  &:hover {
    color: ${({ theme, isDisabled }) => (isDisabled ? theme.buttonDisabled : theme.text3)};
  }
  &.active {
    color: ${({ theme }) => theme.text3};
  }
`

const Menu: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const pathName = useGetCurrentURLPath()
  return (
    <MenuWrapper rowWidth={'fit-content'}>
      <HoverTextWrapper onClick={() => handleNavigate('/')} color={pathName === '/' ? 'text3' : 'text1'}>
        {'Home'}
      </HoverTextWrapper>
    </MenuWrapper>
  )
}
export default Menu
