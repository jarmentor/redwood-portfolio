import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'

import { colors, breakpoints } from '@styles'
import { Layout, Typography, Authenticated, Copyright, Nav } from '@components'

const { Content } = Layout
const { Title } = Typography

const DashboardContent = styled(Content)`
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 1rem;
`

const AdminWrapper = styled(Layout)`
  & > * {
    padding: 1rem 2rem 1rem 2rem;
  }
  header {
    border-bottom: 1px solid ${colors.capeCod};
    color: ${colors.capeCod};
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  footer {
    background: ${colors.codGray};
    color: white;
    height: 10vh;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100vw;
    padding: 0;
  }
`

const AdminLayout = ({ children }) => (
  <AdminWrapper>
    <header>
      <Title level={6}>
        <Link to={routes.adminDashboard()}>Dashboard</Link>
      </Title>
      <Nav>
        <Nav.Item to={routes.home()}>View Site</Nav.Item>
        <Nav.Item to={routes.adminPosts()}>Posts</Nav.Item>
      </Nav>
    </header>
    <DashboardContent>{children}</DashboardContent>
    <footer>
      <Authenticated />
      <Copyright />
    </footer>
  </AdminWrapper>
)

export default AdminLayout
