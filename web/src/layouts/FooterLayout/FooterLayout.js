import Copyright from '@components/Copyright'
import { css } from 'linaria'
import GithubLogo from '@components/GithubLogo'

import { breakpoints } from '@styles'

const FooterLayout = ({ title, children }) => (
  <footer className={footerStyles}>
    <Copyright>{title}</Copyright>
    <div>
      <GithubLogo link="https://github.com/jarmentor/redwood-portfolio" />
    </div>
    {children}
  </footer>
)

const footerStyles = css`
  background-color: var(--off-white);
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: space-around;
  margin: 0 auto;
  padding: 4vw 5vh 3vh;
  min-height: 30vh;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    > * {
      margin-bottom: 1rem;
    }
  }
`

FooterLayout.defaultProps = {
  title: 'Jonathan Armentor',
}

export default FooterLayout
