import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import { PostForm, Typography } from '@components'
import { AdminLayout } from '@layouts'

const { Title } = Typography

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminPosts())
    },
  })

  const onSave = (input) => {
    createPost({ variables: { input } })
  }

  return (
    <AdminLayout className="rw-segment">
      <header className="rw-segment-header">
        <Title level={2} className="rw-heading rw-heading-secondary">
          New Post
        </Title>
      </header>
      <div className="rw-segment-main">
        <PostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </AdminLayout>
  )
}

export default NewPost
