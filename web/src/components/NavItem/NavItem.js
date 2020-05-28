import { NavLink } from '@redwoodjs/router'
import { styled } from 'linaria/react'

const StyledNavItem = styled.li`
  a {
    border-bottom: 0.125rem solid transparent;
    color: inherit;
    font-size: 1rem;
    letter-spacing: 0.125rem;
    margin-left: -0.325rem;
    padding-top: 0.325rem;
    padding: 0.125rem 0.325rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: 300ms ease-in-out;
    will-change: font-weight border-color;

    * > & {
      line-height: 2.25;
    }

    &:hover {
      border-color: var(--midnight-green);
    }
    &.active {
      font-weight: 700;
      font-style: bold;
      color: var(--white);
      background-color: var(--midnight-green);
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
