import { css } from 'linaria'

import { HeaderLayout, FooterLayout } from '@layouts'

const mainStyles = css`
  background: var(--off-white);
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
`
const PageLayout = ({ children }) => (
  <>
    <HeaderLayout />
    <main className={mainStyles}>{children}</main>
    <FooterLayout />
  </>
)

export default PageLayout
