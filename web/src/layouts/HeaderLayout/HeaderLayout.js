import Navigation from 'src/components/Navigation'
import Masthead from 'src/components/Masthead'
import { css } from 'linaria'

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  padding: 4vw 5vh 3vh;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
  }
`

const HeaderLayout = ({ children }) => {
  return (
    <header className={headerStyles}>
      <Masthead className="masthead" />
      <Navigation />
      {children}
    </header>
  )
}

export default HeaderLayout
