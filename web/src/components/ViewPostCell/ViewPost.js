import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { Typography } from '@components'
import { PageLayout } from '@layouts'
const ViewPost = ({ post }) => {
  const { Title } = Typography
  const { isAuthenticated } = useAuth()
  return (
    <PageLayout>
      <article>
        <Title level={1}>{post.title}</Title>

        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <footer>
          <p>Author: {post.author}</p>
          <p>created at: {new Date(post.createdAt).toLocaleString()}</p>
        </footer>
      </article>
      {isAuthenticated && (
        <Link to={routes.adminEditPost({ id: post.id })}>Edit Post</Link>
      )}
    </PageLayout>
  )
}

export default ViewPost
