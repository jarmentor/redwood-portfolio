import styled from 'styled-components'

import { breakpoints } from '@styles'

const StyledFooter = styled.footer`
  display: flex;
  border-top: 1px solid black;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 auto;
  text-align: right;
  padding: 2rem;
  min-height: 30vh;
  align-items: flex-end;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      align-self: flex-start;
      text-align: left;
    }

    > * {
      align-self: flex-start;
      text-align: left;
      margin-bottom: 1rem;
    }
  }
`

const Footer = ({ children, ...props }) => (
  <StyledFooter {...props}>{children}</StyledFooter>
)

export default Footer
