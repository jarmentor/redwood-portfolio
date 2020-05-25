import { Link, routes } from '@redwoodjs/router'
import './Masthead.css'

const Masthead = ({ title = 'Jonathan Armentor', children, ...props }) => (
  <div className="masthead" {...props}>
    <Link to={routes.home()}>{children || <h1>{title}</h1>}</Link>
  </div>
)
export default Masthead
