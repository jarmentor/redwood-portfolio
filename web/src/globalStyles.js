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
      --off-white: ${colors.offWhite};
    }
  }
`

const globals = css`
  :global() {
    html {
      color: var(--midnight-green);
      @media screen and (max-width: ${breakpoints.small}) {
        font-size: 100%;
      }
      @media screen and (min-width: ${breakpoints.medium}) {
        font-size: 85%;
      }
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    a {
      color: var(--midnight-green);
    }

    body {
      padding: 0;
      margin: 0;
    }
  }
`
export default cx(globals, root, typography)
