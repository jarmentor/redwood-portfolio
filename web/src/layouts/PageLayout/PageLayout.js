import { css } from 'linaria'
import HeaderLayout from '@layouts/HeaderLayout'
import FooterLayout from '@layouts/FooterLayout'

const mainStyles = css`
  background: var(--white);
  margin: 0 auto;
  min-height: 70vh;
  padding: 4vw 5vh 3vh;

  @media screen and (min-width: 768px) {
    margin: 7em auto;
    width: 70%;
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
