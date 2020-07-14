import styled from 'styled-components'

import { mediaQuery } from '@styles'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--black);

  ${mediaQuery.lessThan('medium')`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const Header = ({ children, ...props }) => (
  <StyledHeader {...props}>{children}</StyledHeader>
)

export default Header
