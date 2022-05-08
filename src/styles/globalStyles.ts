import { createGlobalStyle, withTheme } from 'styled-components'

import { themeFontFamily } from './theme'
import { GlobalThemeProps } from './types'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #02172b;
    --black2: #0c1f30;
    --blue: #01204c;
    --lightBlue: #2081e2;
    --purple: #a260f3;
    --violet: #7716bc;
    --yellow: #d1b311;
    --pink: #f268eA;
    --greenYellow: #e7f268;
    --divider: #3f444e;
    --borderColor: #383d45;
    --borderColor2: #ccb4e9;
    --inputBGColor: #383d4526;
    --boxBGColor: #2a3039;
    --buttonColor1: #2081e2;
    --buttonHoverColor1: #1e70c2;
    --buttonColor2: #5865F2;
    --buttonHoverColor2: #4a55ce;
    --buttonColor3: #1da1f2;
    --buttonHoverColor3: #1890d9;
    --buttonColor4: #833ab4;
    --buttonHoverColor4: #682b91;
    --buttonColor5: #a260f3;
    --buttonHoverColor5: #7743b6;
    --buttonColor6: #ba1550;
    --buttonHoverColor6: #ba0223;
    --disable: #383d4580;
    --scrollbarTrack: #c4c4c4;
    --scrollbarThumb: #794cec;

    // toastify style
    --toastify-font-family: ${themeFontFamily.main};
    --toastify-toast-width: fit-content;
  }

  body {
    background-repeat: repeat;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background1};
    background-size: cover;
    color: ${({ theme }: GlobalThemeProps) => theme.text1};
    font-family: 'Inter' !important;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    opacity: 1;
    z-index: -1;
    transition: background-color 300ms ease-in-out 0s, opacity 800ms ease-in-out 0s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    input, select, textarea, button { font-family: inherit; }
  }

  /* For Chrome */
  /* width */
  ::-webkit-scrollbar {
    @media all and (min-width: 990px) {
      width: 4px;
      height: 2px;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--scrollbarTrack);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--scrollbarThumb);
    height: 24px;
    width: 24px;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--violet);
  }
`

export const gradient = {
  normal: 'linear-gradient(var(--yellow1), var(--yellow3))',
  hover: 'linear-gradient(var(--yellow2), var(--yellow3))',
  active: 'linear-gradient(var(--yellow3), var(--yellow2))',
}

export default withTheme(GlobalStyles)
