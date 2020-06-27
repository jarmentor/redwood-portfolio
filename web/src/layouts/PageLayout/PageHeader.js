import { routes } from '@redwoodjs/router'
import styled from 'styled-components'

import { Layout, Masthead, Nav } from '@components'
import { breakpoints } from '@styles'
const { Header } = Layout

const StyledPageTitle = styled.span`
  display: none;
  @media screen and (min-width: ${breakpoints.medium}) {
    display: block;
    background: var(--black);
    text-transform: uppercase;
    color: var(--white);
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const PageHeader = ({ pageTitle = '' }) => (
  <Header>
    <Masthead to={routes.home()}>Jonathan Armentor</Masthead>
    <StyledPageTitle>{document.location.href.split('/').pop()}</StyledPageTitle>
    <Nav>
      <Nav.Item to={routes.home()} className="sr-only">
        Home
      </Nav.Item>
      <Nav.Item to={routes.about()}>About</Nav.Item>
      <Nav.Item to={routes.contact()}>Contact</Nav.Item>
    </Nav>
  </Header>
)

export default PageHeader
