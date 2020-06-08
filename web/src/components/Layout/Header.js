import styled from 'styled-components'

import { breakpoints } from '@styles'
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid black;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Header = ({ children, ...props }) => (
  <StyledHeader {...props}>{children}</StyledHeader>
)

export default Header
