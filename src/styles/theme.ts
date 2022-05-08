import { isMobile, isTablet } from 'react-device-detect'

import { ThemeProps } from './types'
export const themeColor: ThemeProps = {
  // background color
  background1: 'var(--blue)',
  background2: 'var(--black)',
  background3: 'var(--purple)',
  background4: 'var(--violet)',
  background5: 'var(--pink)',
  background6: 'var(--greenYellow)',
  // text color
  text1: 'var(--white)',
  text2: 'var(--black2)',
  text3: 'var(--purple)',

  //button color
  button1: 'var(--buttonColor1)',
  buttonHover1: 'var(--buttonHoverColor1)',
  button2: 'var(--buttonColor2)',
  buttonHover2: 'var(--buttonHoverColor2)',
  button3: 'var(--buttonColor3)',
  buttonHover3: 'var(--buttonHoverColor3)',
  button4: 'var(--buttonColor4)',
  buttonHover4: 'var(--buttonHoverColor4)',
  button5: 'var(--buttonColor5)',
  buttonHover5: 'var(--buttonHoverColor5)',
  button6: 'var(--buttonColor6)',
  buttonHover6: 'var(--buttonHoverColor6)',

  buttonDisabled: 'var(--disable)',

  // border, divider color
  border1: '1px solid var(--purple)',
  border2: '3px solid var(--yellow)',
  border3: '4px solid var(--lightBlue)',
  border4: '1px solid var(--borderColor)',
  border5: '1px solid var(--borderColor2)',
  divider: 'var(--divider)',
  // box-shadow
  boxShadow1: '0px 35px 50px var(--blackOpacity07)',
}

export const themeTypography = {
  xs: isMobile || isTablet ? '0.7vmax' : '0.5vmax',
  sm: isMobile || isTablet ? '0.9vmax' : '0.7vmax',
  base: isMobile || isTablet ? '1.1vmax' : '0.9vmax',
  lg: isMobile || isTablet ? '1.2vmax' : '0.95vmax',
  xl: isMobile || isTablet ? '1.3vmax' : '1.1vmax',
  xxl: isMobile || isTablet ? '1.6vmax' : '1.4vmax',
  xxxl: isMobile || isTablet ? '1.9vmax' : '1.7vmax',
  xxxxl: isMobile || isTablet ? '3.2vmax' : '3vmax',
  extra: isMobile || isTablet ? '3.7vmax' : '3.54vmax',
}

// export const themeTypography = {
//   xs: '12px',
//   sm: '14px',
//   base: '16px',
//   lg: '18px',
//   xl: '20px',
//   xxl: '28px',
//   xxxl: '34px',
//   xxxxl: '56px',
//   extra: '68px',
// }

export const themeFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

export const themeFontFamily = {
  title: 'RoxBoroughCF',
  main: 'Inter',
}

export const themeBorderRadius = {
  none: '0',
  small: '5px',
  regular: '10px',
  medium: '66px',
  circle: '50%',
}

export const themeSize = {
  xs: '576px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px',
}

export const themeBreakPoint = {
  xs: `(min-width: ${themeSize.xs})`,
  sm: `(min-width: ${themeSize.sm})`,
  md: `(min-width: ${themeSize.md})`,
  lg: `(min-width: ${themeSize.lg})`,
  xl: `(min-width: ${themeSize.xl})`,
}
