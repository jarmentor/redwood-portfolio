import { useAuth } from '@redwoodjs/auth'

import { AdminDashboardLayout } from '@layouts'

const AdminDashboardPage = () => {
  const { currentUser } = useAuth()
  return (
    <AdminDashboardLayout>
      <div>
        <h2>Current User</h2>
        <table>
          <tr>
            <td>Name</td>
            <td>{currentUser.user_metadata.full_name}</td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td>{currentUser.email}</td>
          </tr>
        </table>
      </div>
    </AdminDashboardLayout>
  )
}

export default AdminDashboardPage
