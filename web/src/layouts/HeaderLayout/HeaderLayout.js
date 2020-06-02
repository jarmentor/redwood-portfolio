import { styled } from 'linaria/react'

import { breakpoints } from '@styles'
import { Masthead, Navigation } from '@components'

const Header = styled.header`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--yellow);
  min-height: 6rem;
  padding: 1rem 2rem;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const HeaderLayout = () => {
  return (
    <Header>
      <Masthead />
      <Navigation />
    </Header>
  )
}

export default HeaderLayout
