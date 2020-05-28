import { NavLink, routes } from '@redwoodjs/router'
import { css } from 'lineria'

const Navstyles = css`
  & > ul {
    display: block;
    text-align: right;
    list-style: none;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 600px) {
      text-align: left;
    }
  }

  & li {
    padding: 0.5em 0.25em;
  }

  & a {
    color: inherit;
    letter-spacing: 0.055em;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 2em;
  }

  & a::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    height: 0.5em;
    top: -0.8em;
    right: 0;
    background-color: var(--yellow);
    opacity: 0.9;
    visibility: hidden;
    transform: scaleX(0);
    z-index: -5;
    transform-origin: top left;
    transition: all 0.3s ease-in-out 0s;
  }
  & a:hover,
  & a.active {
    font-weight: 700;
    font-style: bold;
  }

  & a:hover::after,
  & a.active::after {
    visibility: visible;
    transform: scaleX(1);
  }
`

const NavItem = ({ to, children, ...props }) => (
  <li>
    <NavLink to={to} activeClassName="active" {...props}>
      {children}
    </NavLink>
  </li>
)

const Navigation = () => {
  return (
    <nav className={Navstyles}>
      <ul>
        <NavItem to={routes.about()}>About</NavItem>
        <NavItem to={routes.projects()}>Projects</NavItem>
        <NavItem to={routes.typography()}>Typography</NavItem>
        <NavItem to={routes.contact()}>Contact</NavItem>
      </ul>
    </nav>
  )
}

export default Navigation
