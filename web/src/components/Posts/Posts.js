import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text = '', ending = '...') => {
  if (text.length < MAX_STRING_LENGTH) {
    return text
  }

  return text.substring(0, MAX_STRING_LENGTH) + ending
}

const PostsList = ({ posts }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>title</th>
            <th>body</th>
            <th>author</th>
            <th>createdAt</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(({ id, body, title, author, createdAt }) => (
            <tr key={id}>
              <td>{truncate(title)}</td>
              <td>
                <p>{truncate(body)}</p>
              </td>
              <td>{truncate(author)}</td>
              <td>
                <time dateTime={createdAt} title={createdAt}>
                  {new Date(createdAt).toUTCString()}
                </time>
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminPost({ id })}
                    title={'Show post ' + id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditPost({ id })}
                    title={'Edit post ' + id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete post ' + id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsList
