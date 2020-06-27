import { Link, routes } from '@redwoodjs/router'

import { Typography } from '@components'
const { Title } = Typography

const RwButton = ({ icon, children, to, ...props }) => (
  <Link to={to} className="rw-button rw-button-green" {...props}>
    <div className="rw-button-icon">{icon}</div> {children}
  </Link>
)

const PostsLayout = ({ children }) => (
  <div className="rw-scaffold">
    <header className="rw-header">
      <Title level={1} className="rw-heading rw-heading-primary">
        <Link to={routes.posts()} className="rw-link">
          Posts
        </Link>
      </Title>
      <RwButton icon="+" to={routes.newPost()}>
        New Post
      </RwButton>
    </header>
    <main className="rw-main">{children}</main>
  </div>
)

export default PostsLayout
