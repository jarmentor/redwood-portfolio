import { Link, routes } from '@redwoodjs/router'
import { css } from 'linaria'

const mastheadStyles = css`
  max-width: 20%;
`

const mastheadLink = css`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
`

const Masthead = ({ title = 'Jonathan Armentor', children, ...props }) => (
  <div className={mastheadStyles} {...props}>
    <Link className={mastheadLink} to={routes.home()}>
      {children || <h1>{title}</h1>}
    </Link>
  </div>
)
export default Masthead
