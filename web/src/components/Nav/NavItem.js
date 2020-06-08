import { NavLink } from '@redwoodjs/router'
import styled from 'styled-components'

const StyledNavItem = styled.li`
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
  }

  &:hover > a {
    text-decoration: line-through;
  }
`

const NavItem = ({ to, children, ...props }) => (
  <StyledNavItem>
    <NavLink to={to} activeClassName="active" {...props}>
      {children}
    </NavLink>
  </StyledNavItem>
)

export default NavItem
