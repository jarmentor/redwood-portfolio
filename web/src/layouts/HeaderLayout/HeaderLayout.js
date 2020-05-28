import { css } from 'linaria'

import { breakpoints } from '@styles'
import { Masthead, Navigation } from '@components'

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 4vw 5vh 3vh;
  background: var(--yellow);

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 12rem;
    flex-direction: column;
    text-align: left;
    justify-items: center;
  }
`

const HeaderLayout = ({ children }) => {
  return (
    <header className={headerStyles}>
      <Masthead />
      <Navigation />
      {children}
    </header>
  )
}

export default HeaderLayout
