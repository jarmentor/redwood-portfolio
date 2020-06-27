import PostsLayout from 'src/layouts/PostsLayout'
import PostsCell from 'src/components/PostsCell'

import { AdminLayout } from '@layouts'
const PostsPage = () => {
  return (
    <AdminLayout>
      <PostsLayout>
        <PostsCell />
      </PostsLayout>
    </AdminLayout>
  )
}

export default PostsPage
