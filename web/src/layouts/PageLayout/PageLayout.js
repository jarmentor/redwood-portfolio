import { css } from 'linaria'

import { breakpoints } from '@styles'
import { HeaderLayout, FooterLayout } from '@layouts'

const mainStyles = css`
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(5vh);
    }
    to {
      opacity: 1;
      transform: translateY(-5vh);
    }
  }
  background: var(--mint-cream);
  margin: 0 auto;
  min-height: 70vh;
  padding: 4vw 5vh 3vh;
  padding-top: 10vh;
  > * {
    animation: fadein 0.6s;
    animation-fill-mode: forwards;
    animation-delay: 0.025;
    animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    padding-bottom: 25vh;
  }
`
const PageLayout = ({ children }) => (
  <>
    <HeaderLayout />
    <main className={mainStyles}>{children}</main>
    <FooterLayout />
  </>
)

export default PageLayout
