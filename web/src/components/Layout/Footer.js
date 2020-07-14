import styled from 'styled-components'

import { mediaQuery } from '@styles'

const StyledFooter = styled.footer`
  align-items: flex-end;
  border-top: 1px solid var(--black);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  min-height: 30vh;
  padding: 2rem;
  text-align: right;

  ${mediaQuery.greaterThan('medium')`
    flex-direction: column;
    * {
      align-self: flex-start;
      text-align: left;
      margin-bottom: 1rem;
    }
  `}
`

const Footer = ({ children, ...props }) => (
  <StyledFooter {...props}>{children}</StyledFooter>
)

export default Footer
