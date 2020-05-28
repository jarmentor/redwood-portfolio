import { NavLink } from '@redwoodjs/router'
import { styled } from 'linaria/react'

const StyledNavItem = styled.li`
  a {
    padding: 0.5rem;

    * > & {
      line-height: 2.25em;
    }

    color: inherit;
    font-size: 1.5rem;
    letter-spacing: 0.125rem;
    text-decoration: none;
    text-transform: uppercase;
    border: 0.25rem solid transparent;
    will-change: font-weight border-color;
    transition: 300ms ease-in-out;

    &:hover {
      border-color: var(--yellow);
    }
    &.active {
      font-weight: 700;
      font-style: bold;
      background-color: var(--yellow);
    }
  }
`

const NavItem = ({ to, children, ...props }) => (
  <StyledNavItem as="li">
    <NavLink to={to} activeClassName="active" {...props}>
      {children}
    </NavLink>
  </StyledNavItem>
)

export default NavItem
