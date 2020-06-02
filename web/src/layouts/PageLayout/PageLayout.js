import { css } from 'linaria'

import { breakpoints } from '@styles'
import { HeaderLayout, FooterLayout } from '@layouts'

const mainStyles = css`
  background: var(--off-white);
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-template-rows: auto;
  gap: 0.5rem;
`
const PageLayout = ({ children }) => (
  <>
    <HeaderLayout />
    <main className={mainStyles}>{children}</main>
    <FooterLayout />
  </>
)

export default PageLayout
