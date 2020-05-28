import Masthead from '@components/Masthead'
import Copyright from '@components/Copyright'
import { css } from 'linaria'

const footerStyles = css`
  align-items: flex-start;
  background: var(--brand-primary);
  color: var(--midnight-green);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5em 3em;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  h1 {
    margin-top: 0;
  }
`

const FooterLayout = ({ title = 'Jonathan Armentor', children }) => (
  <footer className={footerStyles}>
    <Masthead title={title} />
    <Copyright holder={title} />
    {children}
  </footer>
)

export default FooterLayout
