import ViewPost from './ViewPost'
export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    post: post(id: $id) {
      id
      author
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Success = ({ post }) => {
  return <ViewPost post={post} />
}
