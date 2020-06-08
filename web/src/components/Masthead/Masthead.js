import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'

const MastheadLink = styled(Link)`
  color: inherit;
  max-width: auto;
  margin: 0;
  line-height: 1;

  & > h1 {
    font-size: 1rem;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  text-decoration: none;
`

const Masthead = ({ title, children, ...props }) => (
  <MastheadLink to={routes.home()} {...props}>
    {children || <h1>{title}</h1>}
  </MastheadLink>
)

Masthead.defaultProps = {
  title: 'Jonathan Armentor',
}

export default Masthead
