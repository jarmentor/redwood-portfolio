import PropTypes from 'prop-types'
import styled from 'styled-components'

import { breakpoints } from '@styles'

import NavItem from './NavItem'

const NavContainer = styled.ul`
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;

  li {
    margin-left: 0;
    :not(:first-of-type) {
      margin-left: 2rem;
    }
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    text-align: right;
    li {
      margin-left: 0 !important;
    }
  }
`

function Nav({ children, ...props }) {
  return (
    <nav {...props}>
      <NavContainer>{children}</NavContainer>
    </nav>
  )
}

Nav.Item = NavItem

Nav.propTypes = {
  children: PropTypes.arrayOf(NavItem),
}

export default Nav
