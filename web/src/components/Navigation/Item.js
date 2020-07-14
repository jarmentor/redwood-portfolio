import { NavLink } from '@redwoodjs/router'
import styled from 'styled-components'

import { mediaQuery } from '@styles'
const StyledNavItem = styled.li`
  & {
    margin-left: 0;
    :not(:first-of-type) {
      margin-left: 2rem;
    }

    :hover > a {
      text-decoration: line-through;
    }

    @media ${mediaQuery.smallerThan('medium')} {
      margin-left: 0 !important;
    }
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
  }
`

const Item = ({ to, children, ...props }) => (
  <StyledNavItem>
    <NavLink to={to} activeClassName="active" {...props}>
      {children}
    </NavLink>
  </StyledNavItem>
)

export default Item
