import { Link, routes } from '@redwoodjs/router'

import { Typography } from '@components'
const { Title } = Typography

const PostsLayout = ({ children }) => (
  <div className="rw-scaffold">
    <header className="rw-header">
      <Title level={1} className="rw-heading rw-heading-primary">
        <Link to={routes.posts()} className="rw-link">
          Posts
        </Link>
      </Title>
      <Link to={routes.newPost()} className="rw-button rw-button-green">
        <div className="rw-button-icon">+</div> New Post
      </Link>
    </header>
    <main className="rw-main">{children}</main>
  </div>
)

export default PostsLayout
