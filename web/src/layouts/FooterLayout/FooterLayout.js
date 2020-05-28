import Masthead from '@components/Masthead'
import Copyright from '@components/Copyright'
import { css } from 'linaria'
import GithubLogo from '@components/GithubLogo'
import { breakpoints } from '@styles'

const footerStyles = css`
  align-items: baseline;
  background: var(--brand-primary);
  color: var(--midnight-green);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 3rem;
  text-align: left;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    > * {
      margin-bottom: 1rem;
    }
  }
`

const FooterLayout = ({ title = 'Jonathan Armentor', children }) => (
  <footer className={footerStyles}>
    <Masthead title={title} />
    <Copyright>{title}</Copyright>
    <GithubLogo link="https://github.com/jarmentor/redwood-portfolio" />
    {children}
  </footer>
)

export default FooterLayout
