import { css } from 'linaria'

import { HeaderLayout, FooterLayout } from '@layouts'

const PageLayout = ({ header, subhead, children }) => (
  <>
    <HeaderLayout />
    <main className={mainStyles}>
      {header && <h1>{header}</h1>}
      {subhead && <h2>{subhead}</h2>}
      {children}
    </main>
    <FooterLayout />
  </>
)

const mainStyles = css`
  background-color: var(--off-white);
  padding: 2rem;
  margin: 0 auto;
  max-width: 100%;
  min-height: 60vh;
`

export default PageLayout
