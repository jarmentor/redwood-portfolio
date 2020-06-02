import { routes } from '@redwoodjs/router'
import { styled } from 'linaria/react'
import NavItem from '@components/NavItem'

import { breakpoints } from '@styles'

const NavContainer = styled.ul`
  display: block;
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    display: flex;
    text-align: left;
    li {
      margin-left: 3em;
    }
  }
`

const Navigation = () => {
  return (
    <nav>
      <NavContainer as="ul">
        <NavItem to={routes.about()}>About</NavItem>
        <NavItem to={routes.projects()}>Projects</NavItem>
        <NavItem to={routes.typography()}>Typography</NavItem>
        <NavItem to={routes.contact()}>Contact</NavItem>
      </NavContainer>
    </nav>
  )
}

export default Navigation
