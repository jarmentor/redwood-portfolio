import { Link, routes } from '@redwoodjs/router'

import { Typography } from '@components'
import { AdminLayout } from '@layouts'
const { Title } = Typography
const AdminDashboardPage = ({ children }) => {
  return (
    <AdminLayout>
      <Title level="1"></Title>
      <p>Find me in ./web/src/pages/AdminDashboardPage/AdminDashboardPage.js</p>

      <Link to={routes.adminPosts()}>View Posts</Link>

      {children}
    </AdminLayout>
  )
}

export default AdminDashboardPage
