import { css } from 'linaria'
import { breakpoints } from '@styles'

import { Masthead, Navigation } from '@components'

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 100vw;
  padding: 4vw 5vh 3vh;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
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
