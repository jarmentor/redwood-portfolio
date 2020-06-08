import { createGlobalStyle } from 'styled-components'

import { breakpoints, colors, typography } from '@styles'

const GlobalStyle = createGlobalStyle`
    :root {
      --midnight-green: ${colors.midnightGreen};
      --medium-turquoise: ${colors.mediumTurquoise};
      --mint-cream: ${colors.mintCream};
      --white: ${colors.white};
      --bittersweet: ${colors.bittersweet};
      --yellow: ${colors.yellow};
      --brand-primary: var(--yellow);
      --black: ${colors.black};
      --off-white: ${colors.offWhite};
      --linkHighlight: var(--yellow);
    }

    * {
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &,
      *:before,
      *:after {
        box-sizing: border-box;
      }
    }

    h1,
    h2,
    h3 {
      text-rendering: optimizeLegibility;
    }

    a {
      color:inherit;
      text-decoration:none;
    }

    main a {
      text-decoration: underline;
      color: inherit;
      outline: 0;
    }
    body {
      padding: 0;
      margin: 0;
    }
  ${typography}
`
export default GlobalStyle
