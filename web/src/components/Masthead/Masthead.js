import { Link, routes } from '@redwoodjs/router'
import { css } from 'linaria'

const mastheadStyles = css`
  & {
    max-width: 30vw;
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  header & a {
    font-size: 1.5em;
  }
  footer & a {
    font-size: 1em;
  }
`

const Masthead = ({ title = 'Jonathan Armentor', children, ...props }) => (
  <div className={mastheadStyles} {...props}>
    <Link to={routes.home()}>{children || <h1>{title}</h1>}</Link>
  </div>
)
export default Masthead
