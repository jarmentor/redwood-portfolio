import { css } from 'linaria'

import { HeaderLayout, FooterLayout } from '@layouts'

const PageLayout = ({ children }) => (
  <>
    <HeaderLayout />
    <main className={mainStyles}>{children}</main>
    <FooterLayout />
  </>
)

const mainStyles = css`
  background: var(--off-white);
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
  min-height: 60vh;
`

export default PageLayout
