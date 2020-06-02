import { Link, routes } from '@redwoodjs/router'
import { css } from 'linaria'

const mastheadLink = css`
  color: inherit;
  max-width: auto;
  margin: 0;
  line-height: 1;

  & > h1 {
    font-size: 1.5rem;
    line-height: 1.5;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  text-decoration: none;
`

const Masthead = ({ title, children, ...props }) => (
  <Link className={mastheadLink} to={routes.home()} {...props}>
    {children || <h1>{title}</h1>}
  </Link>
)

Masthead.defaultProps = {
  title: 'Jonathan Armentor',
}
export default Masthead
