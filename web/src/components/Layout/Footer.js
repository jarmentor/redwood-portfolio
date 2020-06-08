import styled from 'styled-components'

import { breakpoints } from '@styles'

const StyledFooter = styled.footer`
  display: flex;
  border-top: 1px solid black;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  text-align: right;
  padding: 4vw 5vh 3vh;
  min-height: 30vh;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    > * {
      margin-bottom: 1rem;
    }
  }
`

const Footer = ({ children, ...props }) => (
  <StyledFooter {...props}>{children}</StyledFooter>
)

export default Footer
