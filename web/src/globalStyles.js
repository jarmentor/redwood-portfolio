import { cx, css } from 'linaria'

import { breakpoints, colors, typography } from '@styles'

const root = css`
  :global() {
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
  }
`

const globals = css`
  :global() {
    html {
      color: var(--black);
      @media screen and (max-width: ${breakpoints.small}) {
        font-size: 100%;
      }
      @media screen and (min-width: ${breakpoints.medium}) {
        font-size: 85%;
      }
      background-color: var(--off-white);
    }

    * {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-select: none; /* disable text select */
      -webkit-touch-callout: none; /* disable callout, image save panel (popup) */
      -webkit-tap-highlight-color: transparent; /* "turn off" link highlight */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    }

    h1,
    h2,
    h3 {
      text-rendering: optimizeLegibility;
    }
    main a:not(.nolinkstyles) {
      text-decoration: none;
      color: inherit;
      box-shadow: inset 0 -0.125rem 0 0 var(--linkHighlight);
      transition: cubic-bezier(0.62, 0.28, 0.23, 0.99) 0.5s;
      will-change: box-shadow;

      :hover {
        box-shadow: inset 0 -30em 0 0 var(--linkHighlight);
      }
    }

    a:focus {
      outline: 0;
    }

    body {
      padding: 0;
      margin: 0;
      background-color: var(--offWhite);
    }
  }
`
export default cx(globals, root, typography)
