import { NavLink, routes } from '@redwoodjs/router'
import './Navigation.css'

const NavItem = ({ to, children, ...props }) => (
  <li>
    <NavLink to={to} activeClassName="active" {...props}>
      {children}
    </NavLink>
  </li>
)

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavItem to={routes.about()}>About</NavItem>
        <NavItem to={routes.typography()}>Typography</NavItem>
        <NavItem to={routes.contact()}>Contact</NavItem>
      </ul>
    </nav>
  )
}

export default Navigation
